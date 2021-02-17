const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth");
const socketIO = require("socket.io")
const util = require('util');

const app = express();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cdef9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const PORT = process.env.NODE_ENV || 8080;

// Giving Access to foreign Domain
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
  next();
})

let prevState;
let entry = true;

//Middleware
app.use(express.json());

//Routes Middleware
app.use("/api/user/", authRoute);

//Connecting to the Database
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the DataBase Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Creating Server
const server = app.listen(PORT, () => {
  console.log(`Listening to the Port ${PORT}`);
});

const io = socketIO(server,{cors:{origin:"*"}})

//Creating web socket connection
io.on("connection",(socket)=>{
  socket.on("dataFromFrontend",(data)=>{
      if(entry){
          prevState = data;
          entry = false;
      }
  
      if(!util.isDeepStrictEqual(prevState, data)){
          socket.broadcast.emit("updatedDataFromBackend",data)
          prevState = data
      }
  })
})

//No Routes Found Middleware
app.use((req, res, next) => {
  res.status(404).json("No Routes Found!");
});

//Default errorHandling Middleware
app.use((error, req, res, next) => {
  res.status(error.errorCode).json(error.message);
});





