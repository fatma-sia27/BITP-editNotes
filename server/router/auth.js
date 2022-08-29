const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/userSchema')
const User2 = require('../models/userSchema2')
router.get('/' , (req,res) => {
    res.send("server router")
})



router.post('/signup' , async(req,res) => {
    const {fname , lname , uname , pwd , stream , year} = req.body
    
    if(!fname || !lname || !uname || !pwd || !stream || !year)
    return res.status(422).json({error:"plz fill data properly"})
    try{

     const userExist = await   User.findOne({uname:uname})
     if(userExist){
        return res.status(422).json({error:"user already there"})
    }
    const user = new User({fname , lname , uname , pwd , stream , year})
    const userRegister = await user.save()

    if(userRegister)
    {
        return res.status(201).json({mesage:"registered successfully"})   
    }
       
    } catch(err){
console.log(err)
    }

    
    })




    router.post('/login' , async(req,res)=>{

        try{
        const {uname , pwd} = req.body
        if(!uname || !pwd){
        
            return  res.status(400).json({message:"unsuccessfull"})
        }
        const userLogin = await User.findOne({uname : uname})
        if(userLogin){
        const  isMatch = await bcrypt.compare(pwd , userLogin.pwd)
        
        
        
        
        if(!isMatch){
            res.json({message:"invalid credentials"}) 
        }
        else {
        res.json({message:"succesfully done"}) 
        }
        }else{
            res.json({message:"invalid "}) 
        }
        
        } 
        catch(err){
        console.log(err)
        }
            })


            router.post('/BITP-editNotes' , async(req,res) => {
                const {firname , lasname ,email , wsp ,str,grad} = req.body
                
                if(!firname || !lasname || !email || !wsp || !str || !grad)
                return res.status(422).json({error:"plz fill data properly"})
                try{
            
                 const userExist = await   User.findOne({email:email})
                 if(userExist){
                    return res.status(422).json({error:"user already there"})
                }
                const user = new User2({firname , lasname ,email , wsp ,str,grad})
                const userRegister = await user.save()
            
                if(userRegister)
                {
                    return res.status(201).json({mesage:"submitted successfuly"})   
                }
                   
                } catch(err){
            console.log(err)
                }
            
                
                })
            
            
            
            


module.exports = router