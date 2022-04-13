const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const userControllers = require('../controllers/userControllers')
const {newAdmin,signUpUser,logInUser,signOutUser,verifyEmail,verifyToken} = userControllers

Router.route('/auth/newAdmin')
.post(validator,newAdmin)

Router.route('/auth/signUp')
.post(validator,signUpUser)

Router.route('/auth/logIn')
.post(logInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/loginToken')
.get(passport.authenticate('jwt', {session:false}), verifyToken)


const wineControllers = require('../controllers/wineControllers')
const {getWines,getTypeWines,oneWine,uploadWine,deleteWine,modifyInfoWine,modifyStockWine} = wineControllers

Router.route('/wines')
.get(getWines)
.post(uploadWine)

Router.route('/types/:id')
.get(getTypeWines)

Router.route('/wines/:id')
.delete(deleteWine)
.put(modifyInfoWine)
.get(oneWine)

Router.route('/stock/:id')
.put(modifyStockWine)


const topicControllers = require('../controllers/topicControllers')
const {getTopics,oneTopic,uploadTopic,deleteTopic,modifyTopic,likeTopic,addComment,modifyComment,deleteComment} = topicControllers

Router.route('/tineraries')
.get(getTopics)

.put(passport.authenticate('jwt', {session:false}), modifyTopic)

Router.route('/tineraries/comment')
.post(passport.authenticate('jwt', {session:false}), uploadTopic)

Router.route('/tineraries/:id')
.get(oneTopic)
.post(passport.authenticate('jwt', {session: false}), deleteTopic)

Router.route('/tineraries/likeDislike/:id')
.put(passport.authenticate('jwt', {session:false}), likeTopic)

Router.route('/comentaries/comment')
.post(passport.authenticate('jwt', {session: false}), addComment)
.put(passport.authenticate('jwt', {session: false}), modifyComment)

Router.route('/tineraries/comment/:id')
.put(passport.authenticate('jwt', {session: false}), deleteComment) 

module.exports = Router