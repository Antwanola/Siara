const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const healthReport = new Schema({
    username:{
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
pOccurence:{
         type:Boolean
        },
    pOccurence_detail:{
                type:String,
                required:true
               },
               age:{
                   type:Number
               },
               sex:{
                   type:String
                   
               },
    
    eResponse:{
        type:Boolean,
        required:true
    },
    eResponse_needed:{
        type:Boolean,
        required:true
    },
    anonymous:{
        type:Boolean
    }, 
    report:{
        type:String,
        
    }




})

module.exports = mongoose.model('Health Report', healthReport)