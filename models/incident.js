const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const incident = new Schema({
    
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
    
    eResponse:{
        type:Boolean,
        required:true
    },
    eResponse_needed:{
        type:Boolean,
        required:true
    },
    anonimous:{
        type:Boolean
    }, 
    report:{
        type:String,
        required:true
    }




})

module.exports = mongoose.model('Incident', incident)