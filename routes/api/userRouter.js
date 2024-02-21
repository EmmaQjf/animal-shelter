const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/usersController')




//create an user
router.post('/signup', usersCtrl.signUp, usersCtrl.respondWithToken)

//log in an user
router.post('/login', usersCtrl.logIn, usersCtrl.respondWithToken)

//update an user 
router.put('/:id', usersCtrl.auth, usersCtrl.updateUser, usersCtrl.respondWithUser)

//delete an user 
router.delete('/:id', usersCtrl.auth, usersCtrl.deleteUser)

//show an user 
router.get('/:id', usersCtrl.auth, usersCtrl.showUser)

module.exports = router