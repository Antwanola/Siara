const Express = require('express')
const App = Express()
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
const {authenticationToken} = require('./controllers/authController')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const jwt = require('jsonwebtoken')


mongoose.connect('mongodb://localhost/siara', {
        useNewUrlParser: true
    }).then(db => {
        console.log("db secured")
    })
    .catch(err => {
        console.log(err)
    })



//Use plugins
App.use(Express.urlencoded({
    extended: true
}))
App.use(Express.json())
App.use(Express.json())




//Session
App.use(cookieParser());
App.use(session({

    secret: 'itsasecrete',
    resave: true,
    saveUninitialized: true

}));
// PASSPORT

App.use(passport.initialize());
App.use(passport.session());

App.use(flash());

// App.use((req, res, next)=>{
  
//     res.locals.user = req.user || null,
//     res.locals.message = req.flash('message')
//     res.locals.home_message = req.flash('home_message')
//     res.locals.error= req.flash('error')
    
//     next()
//     })

//Use Routes
const admin = require('./routes/admin/index')
const home = require('./routes/router')
App.use('/', home)
App.use("/admin",admin)

const port = process.env.PORT || 3200;

App.listen(port, () => {

    console.log(`listening on port 3200`);
})