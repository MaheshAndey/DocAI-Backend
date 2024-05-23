const express = require('express');

const cropperRouter = require('./routes/cropper.router');

const cors = require('cors')

const app = express();

const siftRouter = require('./routes/sift_router')

// const loginRouter = require('./routes/login.router');

app.use(cors({
    origin: ["https://localhost:8081",  "http://localhost:3000"]
}));

// app.use(express.json()); //middleware


// module.exports = app;
// app.use(loginRouter);
require('express-async-errors');
// intialising errors

//importing routes
const formsRouter=require("./routes/form.router")
const authRouter=require("./routes/auth_router")
const authenticateUser = require('./middlewares/authentication');
const userreport=require("./routes/userReport_router")
//importing errors
//const errorhandler=require("./middlewares/error-handler");
//using routes 
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api/v1/forms',formsRouter);
app.use('/api/v1/auth',authRouter);
app.use('/sift/details' ,siftRouter)
app.use("/api/v1/reportuser",userreport);
//using errors
//app.use(errorhandler)
//connecting port


app.use(cropperRouter);
module.exports = app;