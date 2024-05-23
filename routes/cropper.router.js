const express = require('express');

const { postCropperDetails, getCropperDetails, getTemplateImage, postTemplateImage ,getTemplateDetailsByName} = require('../controllers/cropper.controller');

const cropperRouter = express.Router();

cropperRouter.post('/cropper/add-details', postCropperDetails);

cropperRouter.get('/cropper/get-details', getCropperDetails);



cropperRouter.get('/cropper/get-template-image', getTemplateImage);

cropperRouter.get('/cropper/get-by-template-name/:tempname', getTemplateDetailsByName);

cropperRouter.post('/cropper/add-template-image', postTemplateImage);

module.exports = cropperRouter;




