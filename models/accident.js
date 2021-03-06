const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const accident = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type: String,   
       }, 
       phone:{
           type:String
       },
       state:{
        type:String,
        required:true
       },
       lga:{
        type:String,
        required:true
        
       },
       street:{
        type:String,
        required:true
       },       
    date:{
        type:String,
        },
    time:{
         type: String,
        },
    
    eResponse:{
        type:String,
        
    },
    eResponse_needed:{
        type:String,
        
    },
    anonymous:{
        type:Boolean
    }, 
    report:{
        type:String,
        required:true
    }



})

module.exports = mongoose.model('Accident', accident)