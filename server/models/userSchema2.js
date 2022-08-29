const mongoose = require('mongoose')



const userSchema2 = new mongoose.Schema({
    firname:{
        type: String , 
        require: true
    },
    lasname:{
        type: String , 
        require: true
    },
    email:{
        type: String , 
        require: true
    },
   
    wsp: {
        type: Number , 
        require: true
    },
    str:{
        type: String , 
        require: true
    }, 
    grad:{
        type: Number , 
        require: true
    }, 


    date:{
type: Date ,
default : Date.now
    }
   
    
})


 const User2 = mongoose.model('CONTACT' , userSchema2 )
 module.exports = User2
 