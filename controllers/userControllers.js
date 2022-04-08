const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const urlMrWines = 'http://localhost:3000/'

const userControllers = {

    newAdmin: async (req,res) => {
        console.log(req)
        let {userName,lastName,email,password,userPhoto} = req.body
        const hashWord = bcryptjs.hashSync(password, 10)
        let from = "newAdminForm"
        let uniqueString = crypto.randomBytes(15).toString('hex')
        let verification = true
        try {
            const newAdmin = new User ({userName,lastName,email,hashWord,from,userPhoto,uniqueString,verification}).save()
            res.json({success: true,
                response: {newAdmin},
                message: "the admin has been created"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't create the admin user, please try again!" })
        }
    },

    signUpUser: async (req,res) => {
        let {userName,lastName,email,password,from,userPhoto,country} = req.body.userData
        const test = req.body.test
        try {
            const mrUser = await User.findOne({email})
            if (mrUser) {
                if (mrUser.from.indexOf(from) === 0) {
                    res.json({
                        success: false,
                        from: "SignUpForm",
                        message: `user ${email} already exists, please LOG IN!`})
                } else {
                    const hashWord = bcryptjs.hashSync(password, 10)
                    mrUser.from.push(from)
                    mrUser.password.push(hashWord)
                    if (from === "SignUpForm") {
                        mrUser.uniqueString = crypto.randomBytes(15).toString('hex')
                        await mrUser.save()
                        await sendEmail(email, mrUser.uniqueString)
                        res.json({
                            success: true, 
                            from: "SignUpForm", 
                            message: `check ${email}! we send you a mail to confirm your SIGN UP!`})
                    } else {
                        mrUser.save()
                        res.json({
                            success: true,
                            from:"externalSignUp", 
                            message: `user exist! LOG IN please!`})
                    }
                }
            } else {
                const hashWord = bcryptjs.hashSync(password, 10)
                const newMrUser = await new User({userName,lastName,email,password:[hashWord],userPhoto,country,city,adress,ship,from:[from],uniqueString: crypto.randomBytes(15).toString('hex'),verification: false})
                if (from === "SignUpForm") {
                    await newMrUser.save()
                    await sendEmail(email, newMrUser.uniqueString)
                    res.json({
                        success: true, 
                        from:"SignUpForm",
                        message: `check ${email} and finish your SIGN UP!`})
                } else {
                    await newMrUser.save()
                    res.json({
                        success: true, 
                        from:"externalSignUp",
                        message: `you SIGN UP by ${from}! now LOG IN!`})
                }
            }
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "sorry! try in a few minutess!!!"})
        }
    },

    logInUser: async (req, res) => {
        const {email, password, from} = req.body.userLogin
        try {
            const mrUser = await User.findOne({email})
            if (!mrUser) {
                res.json({success: false, message: `${email} has no account in MyTinerary, please SIGN UP!`})
            } else {
                if (from === "LogInForm") {
                    if (mrUser.verification ) {
                        let checkedWord =  mrUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if (checkedWord.length > 0) {
                            const userData = {
                                id: mrUser._id,
                                userName: mrUser.userName,
                                email: mrUser.email,
                                userPhoto: mrUser.userPhoto,
                                from: mrUser.from}
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })
                            res.json({
                                success: true, 
                                from: from, 
                                response: {token, userData}, 
                                message: `welcome back ${userData.name}!`})
                        } else {
                            res.json({ success: false, 
                                from: from,  
                                message: `verify your password!`})
                        }
                    } else {
                        res.json({
                            success: false, 
                            from: from, 
                            message:`check ${email}! confirm your SIGN UP and LOG IN!`}) 
                    }
                } else {
                    let checkedWord =  mrUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (checkedWord.length > 0) {
                        const userData = {
                            id: mrUser._id,
                            userName: mrUser.userName, 
                            email: mrUser.email,
                            userPhoto: mrUser.userPhoto,
                            from: mrUser.from}
                        await mrUser.save()
                        const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData}, 
                            message: `welcome back ${userData.name}!`})
                    } else {
                        res.json({ success: false, 
                            from: from,  
                            message: `there is no register from ${from}, please SIGN UP`})
                    }
                }
            }
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "sorry! try in a few minutes!"})
        }
    },

    signOutUser: async (req, res) => {
        const email = req.body.closeData
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log(email+' sign out!'))
    },

    verifyToken:(req, res) => {
        if (!req.err) {
        res.json({
            success: true,
            response: {id: req.user.id,
                userName:req.user.userName,
                email:req.user.email,
                userPhoto:req.user.userPhoto,
                from:"token"},
            message:"Hi! Welcome back "+req.user.name}) 
        } else {
            res.json({
                success:false,
                message:"sign in please!"}) 
        }
    },

    verifyEmail: async (req, res) => {
        const {uniqueString} = req.params;
        const user = await User.findOne({uniqueString: uniqueString})
        if (user) {
            user.verification = true
            await user.save()
            res.redirect(urlMrWines+"welcome")
        }
        else { res.json({success: false, response: `email has not been confirmed yet!`}) }
    }

}

const sendEmail = async (email, uniqueString) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "mr.wines.wines@gmail.com",
            pass: "Hola1234"
        }
    })
    let mailOptions = {
        from: 'mr.wines.wines@gmail.com',
        to: email,
        subject: "verify MyTinerary account",
        html: `
        <div>
            <h1><a href=${urlMrWines}api/verify/${uniqueString} style="color:red">CLICK!</a> to confirm you account.</h1>
            <h2>Thanks for signing up!</h2>
            <br>
            <h3>FIND YOUR PERFECT TRIP</h3>
            <h4>designed by insiders who know and love their cities!</h4>
        </div>
        `};
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) { console.log(error) }
        else {
            console.log(`check ${email} to confirm your account`)
        }
    })
}

module.exports = userControllers
