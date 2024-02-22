const Animal = require('../../models/animal')
const usersCtrl = require('./usersController')

/*
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
*/

module.exports = {
    indexAnimals,
    showAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    jsonAnimal,
    jsonAnimals
}

function jsonAnimal(_, res){
    res.json(res.locals.data.animal)
}

function jsonAnimals(_, res){
    res.json(res.locals.data.animals)
}

async function indexAnimals(req, res, next) {
    try {
        const animals = await Animal.find({})
        res.locals.data.animals = animals
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function showAnimal(req, res, next) {
    try {
        const animal = await Animal.findOne({_id: req.params.id})
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function createAnimal(req, res, next) {
    try {
        req.body.user = req.user._id
        const animal = await Animal.create(req.body)
        req.user.animals.addToSet(animal)
        req.user.save()
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function updateAnimal(req, res, next) {
    try {
        const animal = await Animal.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function deleteAnimal(req, res, next) {
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id)
        req.user.animals.pull(animal)
        req.user.save()
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}