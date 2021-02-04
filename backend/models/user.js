const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  phone: {
    type: Number,
    required: true,
  },
  refId: {
    type: Schema.Types.ObjectId,
    ref: "referral",
  },
  totalpoints: {
    type: Number,
    default: 0,
  },
  downliners: [
    {
      userReferId: {
        type: String,
        ref:'referalId'
        // ref: "user",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  message:{
    type:String
  }
});
UserSchema.methods.comparePassword = function(guessPassword) {
  return bcrypt.compareSync(guessPassword, this.password);
};

module.exports = mongoose.model("user", UserSchema);

// let mongoose = require('mongoose')
// let Schema = mongoose.Schema;
// let bcrypt = require('bcrypt');
// let saltRound = 10;

// let UserSchema = new Schema({
//     firstname:{type:String},
//     lastname:{type:String},
//     email:{type:String},
//     password: {type:String},
//     confirmpassword:{type:String},
//     dateCreated: {type:Date, 'default':Date.now()}

// });

// // UserSchema.method.encryptPassword = function(password){
// //     let salt =  bcrypt.genSaltSync(saltRound);
// //     let hash =  bcrypt.hashSync(salt)

// //     return hash

// // }
// // UserSchema.method.checkPassword = function(guessPassword){
// //     bcrypt.compareSync(guessPassword, this.password);
// // }
// UserSchema.methods.encryptPassword = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));

// }
// UserSchema.methods.checkPassword = function(guessPassword){
//     return bcrypt.compareSync(guessPassword, this.password);
// }

// UserSchema.virtual('fullname').get(function(){
//     return this.lastname + '  ' + this.firstname
// })

// module.exports = mongoose.model('user',UserSchema)
