const express =require("express");
const router=express.Router();
const {addreport,getreport}=require("../controllers/user_report");
router.route("/").post(addreport).get(getreport);
module.exports=router;