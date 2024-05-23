
const mongoose=require("mongoose");
const connectdb=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        
        useUnifiedTopology:false,

    })
}
module.exports=connectdb;
