const Wine = require('../models/wine')

const wineControllers = {

    getWines: async (req,res) => {
        let wines
        let error = null
        try {
            wines = await Wine.find()
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {wines},
            success: error ? false:true,
            error: error
        })
    },
    
    getTypeWines: async (req,res) => {
        let wines
        let {type} = req.body.type
        let error = null
        try {
            wines = await Wine.find({type:type})
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {wines},
            success: error ? false:true,
            error: error
        })
    },

    oneWine: async (req,res) => {
        const id = req.params.id
        //const user = req.user._id
        let wines
        let error = null
        try {
            wines = await Wine.findOne({_id:id})
                //.populate("stock")
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {wines},
            success: error ? false:true,
            error: error
        })
    },
    
    uploadWine: async (req,res) => {
        const {nameWine,type,variety,country,harvest,smell,color,palate,photo,stock,stars,price} = req.body
        //const user = req.user._id
        try {
            const newWine = new Wine ({nameWine,type,variety,country,harvest,smell,color,palate,photo,stock,stars,price}).save()
            res.json({success: true,
                response: {newWine},
                message: "the wine has been uploaded"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't upload the wine, please try again!" })
        }
    },

    deleteWine: async (req,res) => {
        const id = req.params.id
        await Wine.findOneAndDelete({_id:id})
    },

    modifyInfoWine: async (req,res) => {
        const {nameWine,type,variety,country,harvest,smell,color,palate,photo,price} = req.body
        const id = req.params.id
        const user = req.user._id
        try {
            const modifyWine = await Wine
            .findOneAndUpdate({"_id": id}, {$set:{
                "nameWine": nameWine,
                "type": type,
                "variety": variety,
                "country": country,
                "harvest": harvest,
                "smell": smell,
                "palate": palate,
                "color": color,
                "photo": photo,
                "price": price}}, {new: true})
            res.json({success: true,
                response: {modifyWine},
                message: "the wine has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't modify the wine, please try again!" })
        }
    },

    modifyStockWine: async (req,res) => {
        const {stock} = req.body
        const id = req.params.id
        //const user = req.user._id
        try {
            const modifyWine = await Wine
            .findOneAndUpdate({"_id": id}, {$set:{
                "stock.stock": stock}}, {new: true})
            res.json({success: true,
                response: {modifyWine},
                message: "the stock has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't modify the stock, please try again!" })
        }
    }

}

module.exports = wineControllers