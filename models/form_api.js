const mongoose=require('mongoose');
const FormInfo=mongoose.Schema({
    NameofPublisher: {
        type: String,
        required: [true, 'Please provide  NameofPublisher'],
        maxlength: 50,
        minlength: 3,
      },
      PublisherEmail: {
        type: String,
        required: [true, 'Please provide PublisherEmail'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
      },
      NameofTemplate:{
          type:String,
          required: [true, 'Please provide NameofTemplate'],
          maxlength:50,
          minlength:3,
      },
      TypeofTemplate:{
          type:String,
          required: [true, 'Please provide TypeofTemplate'],
          maxlength:50,
          minlength:3,
      }
});

module.exports=mongoose.model("forminfo",FormInfo);    