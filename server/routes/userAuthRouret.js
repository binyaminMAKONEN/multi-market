const app = require('express').Router()
const passport =require ('passport')
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const expressSession = require ('express-session')
const userAuthModle = require('../models/authUsers')
const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET =process.env.GOOGLE_CLIENT_SECRET

app.use(expressSession({
    secret: 'jayantpatilapp',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    // process.nextTick(()=>{
    //     userAuthModle.findOne({'uid':profile.id},(err,user)=>{
    //         if(err)
    //         return done(err)
    //         if(user){
    //             console.log('user found');
    //             console.log(user );
    //             return done(null,user)
    //         }else{
    //             let newUser = new userAuthModle()
    //             newUser.uid = profile.id
    //             newUser.name = profile.name.givenName + " " +profile.name.familyName
    //             newUser.email = profile.email[0].value
    //             newUser.pic = profile.photos[0].value
    //             newUser.save(err=>{
    //                 if(err)
    //                 throw err ;
    //                 return done(null,newUser);
    //             })
    //         }
    //     })
    //   })
    console.log(profile);
}))

passport.serializeUser((user,callback)=>{
    callback(null, user);
})

passport.deserializeUser((user, callback)=>{
    callback(null, user);
})

//routes
app.get('/login/google', passport.authenticate('google', {scope:['profile email']}));
app.get('/google', passport.authenticate('google'),(req,res)=>{
    res.redirect('/auth');
})


app.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) {
        console.log(err);
        return next(err); }
      res.redirect('/auth');
    });
  });

app.get('/',(req,res)=>{
    res.send(req.user?req.user: 'Not logged in,login with Google or facebook');
    console.log(req.user);
})


module.exports = app