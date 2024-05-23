const mongoose=require("mongoose");
const userReportSchema=mongoose.Schema({
    usermail:{
     
            type:String,
            require:[true,"Please Provide a email"],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email',
              ],
         
        },

    issue : {
        type: String,
        required: [true, 'Please write some description'],
        maxlength: 500,
        minlength: 20,
      },
    }
);
module.exports=mongoose.model("userReports",userReportSchema);    


