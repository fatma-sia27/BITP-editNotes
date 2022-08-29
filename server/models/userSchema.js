const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
//const { NextWeek } = require('@material-ui/icons')

const userSchema = new mongoose.Schema({
    fname:{
        type: String , 
        require: true
    },
    lname:{
        type: String , 
        require: true
    },
    uname:{
        type: String , 
        require: true
    },
    pwd:{
        type: String , 
        require: true
    },
    stream:{
        type: String , 
        require: true
    },
    year:{
        type: Number , 
        require: true
    }
})

userSchema.pre('save' , async function(next)  {
   console.log("hjghj")
    if(this.isModified('pwd')){
  this.pwd = await bcrypt.hash(this.pwd , 12)
  
    }
    next()
  
  })
 const User = mongoose.model('NOTE' , userSchema )
 module.exports = User
 