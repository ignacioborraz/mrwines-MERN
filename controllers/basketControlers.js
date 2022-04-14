const Basket = require('../models/basket')

const basketControllers = {

    getBuy: async (req,res) => {
        let basket
        let state = "buy"
        let error = null
        const admin = req.user._id
        const verifyAdmin = req.user.admin
        if (verifyAdmin) {
            try {
                basket = await Basket.find({buyState:state})
                    .populate("idWine", {nameWine:1,price:1,photo:1})
                    .populate("idUser", {email:1,userName:1})
            } catch (err) {
                error = err
                console.log(error)
            }
            res.json({
                response: error ? 'ERROR' : {basket},
                success: error ? false:true,
                error: error
            })
        }
    },

    getOld: async (req,res) => {
        let basket
        let state = "old"
        let error = null
        const admin = req.user._id
        const verifyAdmin = req.user.admin
        if (verifyAdmin) {
            try {
                basket = await Basket.find({buyState:state})
                    .populate("idWine", {nameWine:1,price:1,photo:1})
                    .populate("idUser", {email:1,userName:1})
            } catch (err) {
                error = err
                console.log(error)
            }
            res.json({
                response: error ? 'ERROR' : {basket},
                success: error ? false:true,
                error: error
            })
        }
    },

    
    getUserBasket: async (req,res) => {
        let basket
        let idUser = req.user._id
        let state = "toBuy"
        let error = null
        try {
            basket = await Basket.find({idUser:idUser, buyState:state})
                .populate("idWine", {nameWine:1,price:1,photo:1,type:1,variety:1})
                .populate("idUser", {email:1,userName:1})
                console.log('BASKET BASKET BASKET BASKET BASKET BASKET BASKET BASKET')
                console.log(basket)
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {basket},
            success: error ? false:true,
            error: error
        })
    },
    
    addProduct: async (req,res) => {
        //console.log(req.body)
        const {idWine} = req.body
        const idUser = req.user._id
        const date = {booking: new Date()}
        const amount = 1
        const buyState ="toBuy"
        const user = req.user._id
        //console.log(idWine,idUser,date,amount,buyState)
        try {
            const newProduct = await new Basket ({idWine,idUser,date,amount,buyState}).save()
            res.json({success: true,
                response: {newProduct},
                message: "the product has been added"})
                console.log(newProduct)
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't add to the basket, please try again!" })
        }
    },

    deleteProduct: async (req,res) => {
        const idProduct = req.params.id
        const user = req.user._id
        try {
            await Basket.findOneAndDelete({_id:idProduct})
            res.json({success: true,
                message: "the product has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't deleted the product, please try again!" })
        }
    },

    modifyProduct: async (req,res) => {
        const {productId,amount,buyState,date} = req.body
        const user = req.user._id
        try {
            const modifyBasket = await Basket
            .findOneAndUpdate({"_id": productId}, {$set:{
                "date": date,
                "amount": amount,
                "buyState": buyState}}, {new: true})
            res.json({success: true,
                response: {modifyBasket},
                message: "the product has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't modify the product, please try again!" })
        }
    }
}

module.exports = basketControllers