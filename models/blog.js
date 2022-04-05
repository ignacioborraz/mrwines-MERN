const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema ({
    userPhoto: {type:mongoose.Types.ObjectId, ref:'user'},
    userName:  {type:mongoose.Types.ObjectId, ref:'user'},
    title: {type:String, required:true},
    text: {type:String, required:true},
    tags: {type:Array, required:true},
    likes: {type:Array},
    comments: [{
        comment: {type: String},
        userId: {type:mongoose.Types.ObjectId, ref:'user'}
    }]
})

const Topic = mongoose.model('blog',topicSchema)
module.exports = Topic