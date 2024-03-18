const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
// const { default: User } = require('../client/src/User')


const app = express()
app.use(cors())
app.use(express.json())

const DB_URL ='mongodb+srv://janith:userCrud@user.badthcc.mongodb.net/user?retryWrites=true&w=majority&appName=user';

//get users
app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res. json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//create user
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
// update user
app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users =>res.json(users))
    .catch(err => res.json(err))
})
//delete user
app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err => res.json(err))
})
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB Connected');
}).catch((err)=>{
    console.log('DB Connected Error',err);
})

app.listen(3001, () => {
   console.log('Server is Running')

})

