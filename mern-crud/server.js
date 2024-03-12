const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8000;
const DB_URL ='mongodb+srv://crud:crudJanith@crud.1swk79w.mongodb.net/mernCrud?retryWrites=true&w=majority&appName=crud';

mongoose.connect(DB_URL).then(()=>{
    console.log('DB Connected');
}).catch((err)=>{
    console.log('DB Connected Error',err);
})

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
});