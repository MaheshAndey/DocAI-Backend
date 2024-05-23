
const CropperModel = require("../models/cropper.model");

// const asyncHandler = require('express-async-handler');

const TemplateImageModel = require('../models/tmpimg.model');


async function postCropperDetails(req, res) {
    const CropperModelBody = new CropperModel({
    "templateName": req.body.templateName,
    'key': req.body.key,
    'coordinates': {
        'x': req.body.x,
        'y': req.body.y,
        'w': req.body.w,
        'h': req.body.h
    },
    'regex': req.body.regex});
    await CropperModelBody.save();
    return res.status(200).json(CropperModelBody);
}


async function getCropperDetails(req, res) {
    try {
    const detail = await CropperModel.find();
    return res.status(200).json({detail});
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}


async function postTemplateImage(req, res) {
    try{
        const TemplateImageModelBody = new TemplateImageModel({
            "templateName": req.body.templateName,
            "templateImage": req.body.templateImage
        })
        await TemplateImageModelBody.save();
        return res.status(200).json(TemplateImageModelBody);
    }
    catch(error){
        console.log(error.message)
        return res.status(404).json({message: error.message})
    }
}


async function getTemplateDetailsByName(req, res) {
    try {
        const det = await CropperModel.find({"templateName": req.params.tempname});
        return res.status(200).json({det})
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}




async function getTemplateImage(req, res) {
    try {
    const detail = await TemplateImageModel.find();
    return res.status(200).json({detail});
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}





module.exports = { postCropperDetails, getCropperDetails, getTemplateImage, postTemplateImage, getTemplateDetailsByName };









