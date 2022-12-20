const express = require('express') 
const passport =require ('passport')
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const expressSession = require ('express-session')

const app = express();
const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET =process.env.GOOGLE_CLIENT_SECRET
const FACEBOOK_CLIENT_ID =process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/google'
},(accessToken,refreshToken,profile,callback)=>{
    callback(null, profile);
    console.log(profile.displayName);
    
}))

// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_CLIENT_ID,
//     clientSecret: FACEBOOK_CLIENT_SECRET,
//     callbackURL:'/facebook',
//     profileFields: ['emails', 'displayName', 'name', 'picture']
// },(accessToken, refreshToken, profile, callback)=>{
//     callback(null, profile)
// }))

passport.use(new FacebookStrategy({
    clientID:FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL:"http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/facebook/secrets',
  passport.authenticate('facebook'));

app.get('login/auth/facebook/profil',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });

passport.serializeUser((user,callback)=>{
    callback(null, user);
})

passport.deserializeUser((user, callback)=>{
    callback(null, user);
})

app.use(expressSession({
    secret: 'jayantpatilapp',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
//routes
app.get('/login/google', passport.authenticate('google', {scope:['profile email']}));
// app.get('/login/facebook', passport.authenticate('facebook', {scope: ['public_profile,email']}));
app.get('/google', passport.authenticate('google'),(req,res)=>{
    res.redirect('/chen');
})
// app.get('/facebook', passport.authenticate('facebook'),(req,res)=>{
//     res.redirect('/');
// })
app.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/chen');
    });
  });

app.get('/chen',(req,res)=>{
    res.send(req.user?req.user: 'Not logged in, login with Google or facebook');
    console.log(req.user);
})

app.listen(3000, ()=>{
    console.log('server http://localhost:3000');
})