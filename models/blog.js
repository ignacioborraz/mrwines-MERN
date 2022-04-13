const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema ({
    userPhoto: {type:String, required:true},
    userName:  {type:String, required:true},
    title: {type:String, required:true},
    text: {type:String, required:true},
    date: {type:Date},
    likes: {type:Array},
    comments: [{
        comment: {type: String},
        userId: {type:mongoose.Types.ObjectId, ref:'users'},
        user: {type:String},
        profile: {type: String},
        id:{type: String}
    }]
})

const Topic = mongoose.model('blog',topicSchema)
module.exports = Topic