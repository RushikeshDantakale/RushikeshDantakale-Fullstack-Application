const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
require("../DB/conn");

const User = require("../model/userSchema"); 


app.get("/",(req,res)=>{
    res.json({message:"this is home route!"});
})

app.post("/signup",async (req,res)=>{
    const {name,email,username,password,cpassword} = req.body;
    
        
if(!name || !email || !username || !password || !cpassword){
    return res.json({error:"Please fill the fields properly!"});
}

try{
    const userExist = await User.findOne({email:email})

        if(userExist){
            return res.json({error : "user already exists!"})
        }else if(password !== cpassword){
            
            return res.json({error:"Password and Confirm Password must be same!"})
        }else{
    
        const user = new User({name , email, username , password ,cpassword});

        //Hashing 
    
        await user.save();

  
        res.json({message:"user registered successfully!"})

        }
      
     }catch (err){
        res.json({error:'error occured at server side!'})
}
})



app.post("/userlogin",async (req,res)=>{

    try{

        const { username ,password }= req.body;
        
        if(!username || !password){
            res.json({error:"plz fill the data correctly!"})
        }
        
        const userLogin =await User.findOne({$or:[{username},{password}]})
        
        if(userLogin){
                res.json({message:"user Signin successfully"})
                
        }else{
            res.json({error:"Invalid Credientials!"})
        }
        }catch(error){
        
    res.json({error:'error occured at server side!'})
        }
})


module.exports =  app;