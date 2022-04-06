const Topic = require('../models/blog')

const topicControllers = {

    getTopics: async (req,res) => {
        let topics
        let error = null
        try {
            topics = await Topic.find()
                .populate("comments.userId", {userName:1,email:1,userPhoto:1})
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {topics},
            success: error ? false:true,
            error: error
        })
    },

    oneTopic: async (req,res) => {
        const id = req.params.id
        const user = req.user._id
        let topics
        let error = null
        try {
            topics = await Topic.findOne({_id:id})
                .populate("comments.userId", {userName:1,email:1,userPhoto:1})
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {topics},
            success: error ? false:true,
            error: error
        })
    },
    
    uploadTopic: async (req,res) => {
        const {userPhoto,userName,title,text,tags,likes,comments} = req.body
        const user = req.user._id
        try {
        const newTopic = new Topic ({userPhoto,userName,title,text,tags,likes,comments}).save()
            res.json({success: true,
                response: {newTopic},
                message: "the topic has been uploaded"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't upload the topic, please try again!" })
        }
    },

    deleteTopic: async (req,res) => {
        const id = req.params.id
        await Topic.findOneAndDelete({_id:id})
    },

    modifyTopic: async (req,res) => {
        const {title,text,tags} = req.body
        const id = req.params.id
        const user = req.user._id
        try {
            const modifyTopic = await Topic
            .findOneAndUpdate({"_id": id}, {$set:{
                "title": title,
                "text": text,
                "tags": tags}}, {new: true})
            res.json({success: true,
                response: {modifyTopic},
                message: "the topic has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we could'nt modify the topic, please try again!" })
        }
    },

    likeTopic: async (req,res) => {
        console.log(req)
        let id = req.params.id 
        let user = req.user.id
        try { 
            let topics = await Topic.findOne({_id:id}) 
            if (topics.likes.includes(user)) {
                Topic.findOneAndUpdate({_id:id}, {$pull:{likes:user}}, {new:true})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            } else {
                Topic.findOneAndUpdate({_id:id}, {$push:{likes:user}}, {new:true})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            }
        } catch (error) {
            res.json({
                response: error,
                success: false
            })
        } 
    },

    addComment: async (req, res) => {
        const {tinId,comments} = req.body
        const user = req.user._id
        try {
            const newComment = await Topic
                .findOneAndUpdate({_id: tinId}, {$push: {comments: {comment: comments.comment, userId: user}}}, {new: true})
                .populate("comments.userId", {userName:1,email:1,userPhoto:1})
            res.json({success: true,
                response: {newComment},
                message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }
    },

    modifyComment: async (req, res) => {
        const {commentId,comments} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Topic
            .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            res.json({success: true,
                response: {modifyComment},
                message: "the comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!" })
        }
    },

    deleteComment: async (req, res) => {
        const commentId = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Topic
            .findOneAndUpdate({"comments._id": commentId}, {$pull: {comments: {_id: commentId}}}, {new: true})
            res.json({success: true,
                response: {deleteComment},
                message: "the comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again!"})
        }
    }

}

module.exports = topicControllers