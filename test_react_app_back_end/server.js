const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://School:janith0202@cluster0.7ay2le9.mongodb.net/?retryWrites=true&w=majority';

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }catch(error){
        console.log("Not Connected",error); 
    }
};
connect();

const server = app.listen(port,host, ()=>{
    console.log(`Node Server is listening to ${server.address().port}`)
})