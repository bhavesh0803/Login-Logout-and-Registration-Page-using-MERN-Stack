const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');
const ProfileDataModel=require('./models/ProfileData')


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/registration');

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(userinfo => res.json(userinfo))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Invalid Login");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})


app.post('/profile', (req, res)=>{
    // To post / insert data into database

    // const {dob, age, gender, mobile, address, pincode} = req.body;
    
    
            ProfileDataModel.create(req.body)
            .then(profile => res.json(profile))
            .catch(err => res.json(err))
    
    })
    



app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});