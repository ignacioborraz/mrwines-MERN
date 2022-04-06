const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const userControllers = require('../controllers/userControllers')
const {newAdmin,signUpUser,logInUser,signOutUser,verifyEmail,verifyToken} = userControllers

Router.route('/auth/newAdmin')
.post(newAdmin)

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

Router.route('/types')
.get(getTypeWines)

Router.route('/wines/:id')
.delete(deleteWine)
.put(modifyInfoWine)
.get(oneWine)

Router.route('/stock/:id')
.put(modifyStockWine)

Router.route('/tineraries')
.get(getTineraries)
.post(uploadTinerary)

Router.route('/tineraries/:id')
.delete(deleteTin)
//.put(modifyTin)
.get(oneTinerary)

Router.route('/tineraries/cities/:id')
.get(findTinFromCity)

const topicControllers = require('../controllers/topicControllers')
const {getTopics,oneTopic,uploadTopic,deleteTopic,modifyTopic,likeTopic,addComment,modifyComment,deleteComment} = topicControllers

Router.route('/activities')
.get(getActivities)
.post(uploadActivity)

Router.route('/activities/:id')
.delete(deleteAct)
.put(modifyAct)
.get(oneActivity)

Router.route('/activities/tineraries/:id')
.get(findActFromTin)



Router.route('/tineraries/likeDislike/:id')
.put(passport.authenticate('jwt', {session:false}), likeDislike)

Router.route('/tineraries/comment')
.post(passport.authenticate('jwt', {session: false}), addComment)
.put(passport.authenticate('jwt', {session: false}), modifyComment)

Router.route('/tineraries/comment/:id')
.post(passport.authenticate('jwt', {session: false}), deleteComment)

module.exports = Router