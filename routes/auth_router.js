const {createuser,userlogin}=require("../controllers/Auth");
const express=require("express");
const app =express();
const router=express.Router();
router.route("/register").post(createuser);
router.route("/login").post(userlogin);

module.exports=router;