
const http = require('http');


const app = require('./app');


const PORT = process.env.PORT || 8000; // Taking Environmental varibles same like taking command line args (process.arg)


const server = http.createServer(app);

const connectdb = require("./db/connect");

require('dotenv').config()
const start = async ()=>{
    try {
      await connectdb(process.env.MONGO_URI);
        server.listen(PORT, ()=> {
            console.log(`listening to ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();



/////// Reason for seperate for express and node http
// testing the API in-process without having to perform the network calls
// Faster testing execution
// Getting wider coverage metrics of the code
// Allows deploying the same API under flexible and different network conditions
// Better separation of concerns and cleaner code