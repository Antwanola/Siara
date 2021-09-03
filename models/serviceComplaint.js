const mongoose =  require('mongoose')
const Schema = mongoose.Schema


const serviceComplaint = new Schema({


 username:{
    type: String,   
   }, 
   phone:{
       type:String,
       
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
service_description:{
     type:String
    },
complaint_narration:{
        type:String,
        
    },
    provider_name:{
            type:String,
            
           },

agreement_detail:{
    type:String,
    
},

complaint_evidence:{
    type:String
}, 
service_feedback:{
    type:String,
},
anonymous:{
    type:String,
},



})

module.exports = mongoose.model('service complaint',  serviceComplaint)