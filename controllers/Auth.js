const auth=require("../models/Auth");
const{StatusCodes}=require("http-status-codes");
const {BadRequestError,UnauthenticatedError}=require("../errors");

const bcrypt=require("bcryptjs");
const createuser=async(req,res)=>{
    const task= await auth.create(req.body);
    const token = task.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: task.name }, token })
  
    // res.status(StatusCodes.CREATED).json(task);
     
 }

 const userlogin=async(req,res)=>{
   const {email,password}=req.body;
   if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await  auth.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparepassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

 module.exports={createuser,userlogin};
