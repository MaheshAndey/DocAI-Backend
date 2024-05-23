const express = require("express");
const app =express();
const router=express.Router();

const {createform,getallforminfo,getforminfo, getAllRequests, postRequest, getRequestById}=require("../controllers/formapi")


router.route('/').get(getallforminfo).post(createform);
//router.route('/:id').get(getforminfo);
router.route('/requests').get(getAllRequests).post(postRequest)
router.route('/requests/:id').get(getRequestById)



module.exports=router;