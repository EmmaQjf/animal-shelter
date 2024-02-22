const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/*
//create an user
router.post('/signup, usersCtrl.signUp')

//log in an user
router.post('/login, usersCtrl.logIn')

//update an user 
router.post('/:id, usersCtrl.auth, usersCtrl.updateUser')

//delete an user 
router.post('/:id, usersCtrl.auth, usersCtrl.deleteUser')

//show an user 
router.post('/:id, usersCtrl.auth, usersCtrl.showUser')
*/




exports.auth = async function (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ',"")
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({_id: data._id})
        if (!user) {
            throw new Error()
         }
        req.user = user
         next()
    } catch (error) {
        res.status(401).send('Not authorized')
      }
}

exports.signUp = async function(req,res) {
    try {
        const user = await User.create(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json({user, token})
    } catch (error) {
        res.status(400).send({msg: error.message})
    } 
}


exports.logIn = async function(req,res) {
    try {
        const user = await User.findOne({email: req.body.email})
        const match = bcrypt.compare(user.password,req.body.password)
        if (!user || !match) {
            res.status(400).send('Invalid login credentials')
        } else {
            const token = await user.generateAuthToken()
            res.json({user,token})
          }  
    } catch (error) {
        res.status(400).send({msg: error.message})
    } 
}

exports.updateUser = async function(req, res) {
    try{
        const updates = Object.keys(req.body)
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user.save()
        res.json(req.user)
      
      }catch(error){
        res.status(400).json({message: error.message})
      }
}

exports.deleteUser = async (req, res) => {
    try{
      await req.user.deleteOne()
      res.json({ message: 'User deleted' })
    }catch(error){
      res.status(400).json({message: error.message})
    }
  }
  
  exports.showUser = async (req, res) => {
      try {
          const user = await User.findById(req.params.id)
           res.json(user)
      } catch(error) {
          res.status(400).json({message: error.message})
      }
  }
  