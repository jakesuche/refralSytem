let router = require('express').Router();
const  { registerUser, userLogin1, getRegisterPage } = require('../controllers/index')
const { authUser }= require('./isAuthentic')
const Referral = require('../models/referral')
const User = require('../models/user')


router.post('/register', registerUser)
router.post('/login',userLogin1 )
router.get('/me', authUser, function(req,res){
  const user = req.user
  User.findOne({_id:user._id})
  .populate('referalId')
  .then(user => {
    console.log(user)
    res.send(user)
  })
  
})
router.get('/refered', getRegisterPage)

router.get('/referal', authUser, async (req, res) => {
  await Referral.findOne({ userId: req.user._id })
    .populate('user') //Populate model with user
    .then(loggedUser => {
      //Generate random referral link
      
      const generatedRefLink = `${req.protocol}://${req.headers.host}/register?reflink=${loggedUser.referralLink}`
      // const generatedRefLink = `${req.protocol}://localhost:8081/register?reflink=${loggedUser.referralLink}`
      console.log(generatedRefLink)
      res.send({
        loggedUser: loggedUser,
        generatedRefLink: generatedRefLink
      })
    })
} )


router.post('/updateMessage',function(req,res){
  const email = req.query.user
  User.updateOne({email:email},{message:'You were among the luck winner'})
})


router.get('/admim', async function(req,res){
  User.find().sort({totalpoint:-1}).limit(10).exec(function(err,users){
    if(err){
      return res.status(422).send({error:'An eror occurs'})
    }
    res.status(200).send({users})
      
  })
})


module.exports = router