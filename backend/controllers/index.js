const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require("uuid")
const ReferralService = require('./referal')
const Referral = require('../models/referral')
const User = require('../models/user');
const jwt = require('jsonwebtoken')




module.exports = {
    getRegisterPage: async (req, res) => {
        console.log(req.url)
        //Checks if register link contains query "reflink"
        if (req.query.reflink > "") {
          //Validate referral link and gets the referrer
          const referral = await ReferralService.checkReferer({
            referralLink: req.query.reflink,
          })
          
         return  res.send({message:"You were referred by " + referral.userId.firstname})
          
         
        } else {
          res.send("No referal")
        }
      },

    registerUser: async (req, res) => {
       if(req.query.reflink){
        
        let errors = []
    
        if (!req.body.firstname) {
          errors.push({ message: "firstname is mandatory" })
        }
        if (!req.body.lastname) {
            errors.push({ message: "lastname is mandatory" })
          }
        if (!req.body.email) {
          errors.push({ message: "Email field is mandatory" })
        }
        if (!req.body.password) {
          errors.push({ message: "Password field is mandatory" })
        }
        if(!req.body.phone){
            errors.push({ message: "Number field is mandatory" }) 
        }
        //Checks if there are errors in registering a user
        if (errors.length > 0) {
          return res.status(400).send({
           
            errors: errors,
            fullname: req.body.fullname,
            email: req.body.email,
          })
        } else {
            
          User.findOne({ email: req.body.email }).then((user) => {
            //Checks if user already exists in the database and redirect to login
            if (user) {
             
             return  res.status(422).send({error:'Email already exists, try to login.'})
            } else {
              const { firstname, lastname, email, password,phone } = req.body
              //Creates new user
              const newUser = new User({
                firstname:firstname,
                lastname:lastname,
                phone:phone,
                email: email,
                password: password,
              })
              //Generate SALT with 10 rounds
              bcrypt.genSalt(10, (err, salt) => {
                //Hash pzssword before saving to database
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  newUser.password = hash
                  //Save user to database
                  newUser.save().then((user) => {
                    //Creates new referral for new user
                    const newReferrer = new Referral({
                      referralId: uuidv4(),
                      referralLink: uuidv4(),
                      userId: user._id,
                    })
                    //save referral to the database and redirect to login
                    newReferrer.save().then(()=>{
                        ReferralService.checkReferer({
                            referralLink: req.query.reflink,
                          }).then((res)=>{
                              const email = res.userId['email']
                              User.updateOne({email:email},{
                                  $push:{
                                    downliners:{
                                        userReferId:user._id
                                    }
                                  },
                                  $inc:{totalpoints:10}
                              },
                              function(err, data){
                                  if(err){
                                      console.log(err)
                                  }
                                  else{
                                      console.log(data)
                                  }
                                  
                              }
                              )
                          })
                        
                    })
                    console.log('got here')
                    return res.status(200).send({message:'Account created successfully'})
                  })
                })
              })
            }
          })
        }
       }else{
        let errors = []
    
        if (!req.body.firstname) {
          errors.push({ message: "firstname is mandatory" })
        }
        if (!req.body.lastname) {
            errors.push({ message: "lastname is mandatory" })
          }
        if (!req.body.email) {
          errors.push({ message: "Email field is mandatory" })
        }
        if (!req.body.password) {
          errors.push({ message: "Password field is mandatory" })
        }
        if(!req.body.phone){
            errors.push({ message: "Number field is mandatory" }) 
        }
        //Checks if there are errors in registering a user
        if (errors.length > 0) {
          return res.status(400).send({
           
            errors: errors,
            fullname: req.body.fullname,
            email: req.body.email,
          })
        } else {
            
          User.findOne({ email: req.body.email }).then((user) => {
            //Checks if user already exists in the database and redirect to login
            if (user) {
             
             return  res.status(422).send({error:'Email already exists, try to login.'})
            } else {
              const { firstname, lastname, email, password,phone } = req.body
              //Creates new user
              const newUser = new User({
                firstname:firstname,
                lastname:lastname,
                phone:phone,
                email: email,
                password: password,
              })
              //Generate SALT with 10 rounds
              bcrypt.genSalt(10, (err, salt) => {
                //Hash pzssword before saving to database
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  newUser.password = hash
                  //Save user to database
                  newUser.save().then((user) => {
                    //Creates new referral for new user
                    const newReferrer = new Referral({
                      referralId: uuidv4(),
                      referralLink: uuidv4(),
                      userId: user._id,
                    })
                    //save referral to the database and redirect to login
                    newReferrer.save()
                    console.log('got here 2')
                    console.log(req.query,'query')
                    return res.status(200).send({message:'Account created successfully'})
                  })
                })
              })
            }
          })
        }
       }
      },


      userLogin1: async function (req, res) {
        const { email, password } = req.body;
        
        if (!email || !password) {
          res.status(400).send({ message: "Please provide email and password" });
        } else {
          User.findOne({ email: email })
            .select("+password")
            .exec(function (err, user) {
              // User.findOne({ 'email': email }, function (err, user) {
              if (err) {
                throw err;
              }
              
              
              if (!user || !user.comparePassword(password, err)) {
                res.status(401).send({ message: "incorrect email or password" });
              } else {
                const token = jwt.sign({ id: user._id },'kskskskdkdjf', {
                  expiresIn: '2d',
                });
                console.log(user)
                res.status(200).send({
                  status: "success",
                  email:user.email,
                  fullname:user.firstname +' '+user.lastname,
                  lastnametname:user.lastname,
                  firstname:user.firstname,
                  token,
                  
                });
              }
      
              //})
            });
        }
      }
}