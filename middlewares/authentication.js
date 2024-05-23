const auth=require('../models/Auth')
const jwt=require("jsonwebtoken")
require('dotenv').config()
const { UnauthenticatedError } = require('../errors')

const authenticate = (req,res,next) =>{
    //checkheader
    const authheader=req.headers.authorization
    if(!authheader || !authheader.startsWith('Bearer')){
        throw new UnauthenticatedError ("Authentication is invalid");
    }
    const token=authheader.split(" ")[1]
    try {
        const payload=jwt.verify(token,process.env.JWT_SECERT)
        //attach the user to the jpb 
        req.user={userId:payload.userId,name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError ("Authentication is invalid in trycatch");
    }
}
module.exports=authenticate