const express=require("express");
const siftRouter=express.Router();
const{posts3details}=require('../controllers/Sift_controller');
siftRouter.route('/').post(posts3details).get(posts3details);
module.exports=siftRouter;
