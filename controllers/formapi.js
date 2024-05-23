const formapi=  require('../models/form_api');
const{StatusCodes}=require("http-status-codes");
const {BadRequestError,NotFoundError}=require("../errors");
const { FormInfo } = require('../models/form_api')
const FormRequestModel = require('../models/formRequests')
const nodemail=require("nodemailer");


// const create=async(req,res)=>{
//     await formapi.create({NameofPublisher:"hello", PublisherEmail:"sundar@gmail.com",
//     NameofTemplate:"midtemplate",TypeofTemplate:"mid paper"}),res.send("helloworld");
// }


// const config = {
//     bucketName: 'sift-bucket-1',
//     dirName: 'Reference images', 
//     region: 'ap-south-1',
//     accessKeyId: 'AKIAWEVT3WY3P6OZOA54',
//     secretAccessKey: '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',
// }

// const S3Client = new S3(config);




const createform =async(req,res)=>{
    //req.body.createdBy = req.user.userId
        const task= await formapi.create(req.body)
        res.status(StatusCodes.CREATED).json(task);
    }

const getallforminfo = async (req,res)=>{
    try {
        const detail = await formapi.find();
        return res.status(200).json({detail});
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}

const getforminfo =(req,res)=>{
    res.send("getforminfo");
}



const getAllRequests = async(req, res) => {
    try {
        console.log("hvyv")
        const detail = await FormRequestModel.find();
        return res.status(200).json(detail);
    }
    catch(error) {
        return res.status(404).json({message: error.message});
    }
}

const postRequest = async (req,res) => {
    try {
        console.log(req.body);
        const task= await FormRequestModel.create(req.body);

        return res.status(200).json(task);
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
  
}

const getRequestById = async (req,res)=>{
    try {
        var image = "";
        var templateName = ""
        var mail_to=""
        var finalUrl = ""
        const detbyid = await FormRequestModel.find({"NameofTemplate": req.params.id});
        detbyid.map((mail)=>{
            mail_to =mail.PublisherEmail;
            image = mail.Image;
            templateName = req.params.id
        })
        templateName ="MID-TEMPLATE-(autonomous)"
        s3ImgURL = "https://sift-bucket-1.s3.ap-south-1.amazonaws.com/Reference+images/"+templateName+".jpeg"

        var url = "http://localhost:3000/cropper?templateName="+templateName+"&ImageURL="+s3ImgURL

        // shortUrl.short(url, function (err, url) {
        //     console.log(url)
        // })
        // var filename = templateName+".jpeg"


        
        let mailtransporter=  nodemail.createTransport({
            service:"gmail",
            auth:{
             user:"docai.service@gmail.com",
             pass:"mbkrgbjzazhnsija"
        }})
        let details={
            from:"docai.service@gmail.com"
            ,to:"20pa1a5403@vishnu.edu.in"
            ,subject:"hello this is docai service"
            ,text: url,
        }
        mailtransporter.sendMail(details,(err)=>{
            if(err){
                console.log("it has an error",err)
            }
            else{
                console.log("mail successfully done") 
            }
        })
        // console.log(req.params.id);
       
        // console.log(detbyid)
        return res.status(200).json({detbyid})
       
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}
const rejectRequest=async(req,res)=>{
try {
    const {description,email}=req.body;

    
} catch (error) {
    
}
}






module.exports={createform,getallforminfo,getforminfo, getAllRequests, postRequest, getRequestById};

