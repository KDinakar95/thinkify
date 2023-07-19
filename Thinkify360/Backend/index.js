const express = require('express')
require('./Database/dbconnection')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express();
const port = 5077;
const Product = require('./Modal/productSchema')
const User = require('./Modal/userRegistration')
const bcrypt = require('bcryptjs')

app.use(express.json())
app.use(cors())

app.post('/postuser', async (req,res)=>{

try{


    // const{name,email,mobile,password} = req.body;

    // let bcryptpassword = bcrypt.hash(password,12)


const userdata = new User(req.body);

const resulted = await userdata.save();

if(resulted){
    return res.json({message:'user Registered successfully'})
}else{
    return res.json({message:'user not Registered successfully'})
}


}catch(err){
    return res.json({message:err.message})
}


})


app.get('/getproduct', async (req,res)=>{
    try{
        const products =  await  Product.find();

        if(products){
            return res.json({message:"All Produsts found",products})
        }else{
            return res.json({message:" No Produsts found"})
        }
    }catch(err){
        return res.json({message:err.message})
    }

  

})


app.post('/loginuser', async(req,res)=>{

try{

const{ email,passowrd} = req.body;

const data = User.findOne({email:email});

if(data){




}else{
    return res.json({message:'invalid Authentication'})
}







}catch(err){
    return res.json({message:err.message})
}


})



app.post('/postproduct', async (req,res)=>{

    try{

 const productdata = new Product(req.body);

 const result = await productdata.save();

 if(result){

    return res.json({message:'product added successfully'})
 }else{
    return res.json({message:'product not  added successfully'})
 }


    }catch(err){
return res.json({message:err.message})
    }

})







app.listen(port,()=>{
console.log(`listening on the port${port}`)
})