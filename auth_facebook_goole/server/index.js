require('dotenv').config()
const express = require('express')
const app = express()
const FacebookStrategy = require('passport-facebook').Strategy;
const passport =require ('passport')
const expressSession = require ('express-session');
const FACEBOOK_CLIENT_ID =process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

app.set("view engine","ejs")

app.use(expressSession({secret:"thissecretkey"}))
app.use(passport.initialize());
app.use(passport.session());



passport.use(new FacebookStrategy({
    clientID:FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL:"http://localhost:5000/facebook/callback",
    profileFields:['id','displayName','name','gender','picture.type(large)','email']
  },
  function(token, refreshToken, profile, done){
  process.nextTick(function(){
    user.findOne({'uid':profile.id},(err,user)=>{
        if(err) 
        return done(err)
        if(user){
            console.log('user found');
            console.log(user );
            return done(null,user)
        }else{
            let newUser = new user()
            newUser.uid = profile.id
            newUser.name = profile.name.givenName + " " +profile.name.familyName
            newUser.email = profile.email[0].value
            newUser.pic = profile.photos[0].value
            newUser.save(err=>{
                if(err)
                throw err ;
                return done(null,newUser);
            })
        }
    })
  })
  }
));

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
app.get('/facebook/callback', passport.authenticate('facebook',{
successRedirect:'/profile',
failureRedirect:'/failed'
}))


app.get('/profile',isLogggedIn,(req,res)=>{
    console.log(req.user);
    res.render('profile',{user:req.user})
})

function isLogggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/')
}
app.get('/failed',(req,res)=>{
    res.send("you are non a valid user")
})

passport.serializeUser(function(user,done){
    done(null, user);
})

passport.deserializeUser(function(id, done){
   return done(null, id);
})

app.listen(5000,()=>{
    console.log("http://localhost:5000");
})