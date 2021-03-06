const mongoose =  require('mongoose')
const Schema = mongoose.Schema


const serviceComplaint = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },

 name:{
    type: String,   
   }, 
   phone:{
       type:String,
       
   },
   state:{
    type:String,
    
   },
   lga:{
    type:String,
    
    
   },
   street:{
    type:String,
    
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