require('dotenv').config();
const express = require('express')
const router = express.Router()
const authController = require('../../controllers/authController')





//Register endpoint
router.post('/register', authController.register,() => {})
//login
router.post('/login', authController.login,  ()=>{})

//Login endpoint
router.get('/refresh-token', authController.authenticationToken,(req, res)=>{
    res.json({user:req.user})
})


//Logout
router.delete('/logout',  (req, res)=>{
    
    res.redirect('/')
})






 


module.exports = router;