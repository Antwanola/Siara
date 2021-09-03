const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const complaint = new Schema({
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
product_type:{
         type:String
        },
product_brand:{
                type:String,
                
               },
    
    batch_number:{
        type:String,
        
    },
    product_narration:{
        type:String,
        
    },
    supplier:{
        type:String
    }, 
    expiry_date:{
        type:String,
    },
    anonymous:{
        type:String,
    },
    


})

module.exports = mongoose.model('Product Complaint', complaint)