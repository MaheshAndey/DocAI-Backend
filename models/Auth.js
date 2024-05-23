const mongoose =require("mongoose");
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register= new mongoose.Schema({
    firstname:{
        type:String,
        require:[true,"Please Provide a username"],
        maxlength:50,
        minlength:3,
    },
    lastname:{
        type:String,
        require:[true,"Please Provide a username"],
        maxlength:50,
        minlength:3,
    },
    email:{
        type:String,
        require:[true,"Please Provide a email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique:true,
    },
    password:{
        type:String,
        require:[true,"Please Provide a password"],
        maxlength:12,
        minlength:6,
    }

});
register.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
next();
})
register.methods.createJWT = function () {
    return jwt.sign(
      { userId: this._id, name: this.firstname+" "+this.lastname },
      process.env.JWT_SECERT,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    )
  }
//verifying password.
register.methods.comparepassword=async function(checkingpass){
    const ismatch=await bcrypt.compare(checkingpass,this.password)
    return ismatch;
}
module.exports=mongoose.model("register",register)