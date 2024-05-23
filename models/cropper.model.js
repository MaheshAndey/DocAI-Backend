const mongoose=require('mongoose');

const cropperSchema = mongoose.Schema({
    templateName: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    coordinates:{
            x: {type: Number},
            y: {type: Number},
            w: {type: Number},
            h: {type: Number},
    },
    regex: {type: String,
        required: true
    },
})

const CropperModel = mongoose.model('CropperModel', cropperSchema);

module.exports = CropperModel;