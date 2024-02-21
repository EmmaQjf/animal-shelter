const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/usersController')




//create an user
router.post('/signup', usersCtrl.signUp)

//log in an user
router.post('/login', usersCtrl.logIn)

//update an user 
router.put('/:id', usersCtrl.auth, usersCtrl.updateUser)

//delete an user 
router.delete('/:id', usersCtrl.auth, usersCtrl.deleteUser)

//show an user 
router.get('/:id', usersCtrl.auth, usersCtrl.showUser)

module.exports = router