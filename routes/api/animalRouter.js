const express = require('express')
const router = express.Router()
const animalsCtrl = require('../../controllers/api/animalsController')
const usersCtrl = require('./usersController')

//indexAnimal
router.get('/', animalsCtrl.indexAnimals, animalsCtrl.jsonAnimals)

// show an animal
router.get('/:id', animalsCtrl.showAnimal, animalsCtrl.jsonAnimal)

//create an animal
router.get('/', usersCtrl.auth, animalsCtrl.createAnimal, animalsCtrl.jsonAnimal)

//update an animal
router.get('/', usersCtrl.auth, animalsCtrl.updateAnimal, animalsCtrl.jsonAnimal)

//delete an animal 
router.get('/', usersCtrl.auth, animalsCtrl.deleteAnimal, animalsCtrl.jsonAnimal)


module.exports = router