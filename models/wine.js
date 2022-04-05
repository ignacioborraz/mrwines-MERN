const mongoose = require('mongoose')

const wineSchema = new mongoose.Schema ({
    type: {type:String, required:true},
    variety: {type:String, required:true},
    harvest: {type:Number, required:true},
    smell: {type:String, required:true},
    color: {type:String, required:true},
    photo: {type:String, required:true},
    stock: {
        stock: {type:Number, required:true},
        shipping: {type:Number}
    },
    stars: {type:Array}
})

const Wine = mongoose.model('wine',wineSchema)
module.exports = Wine