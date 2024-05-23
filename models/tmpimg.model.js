const mongoose=require('mongoose');

const TemplateImage = mongoose.Schema({
    templateName:{
        type: String,
        required: true
    },
    templateImage: {
        type: String,
        required: true
    }
})


const TemplateImageModel = mongoose.model('TemplateImageModel', TemplateImage);

module.exports = TemplateImageModel;

