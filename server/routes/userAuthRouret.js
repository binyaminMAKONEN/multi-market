const router = require("express").Router();
const passport = require("passport");



function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}



//routes
router.get("/login/google",passport.authenticate("google", { scope: ["email", "profile"] }));
router.get("/google/callback",passport.authenticate("google", {
    successRedirect: "http://localhost:3000", //hare we need the route of after login
    failureRedirect: "/auth/google/failure",
  })
);
router.get("/protected", isLoggedIn, (req, res) => {
    console.log(req.user);
    if(req.user) res.json(req.user);
    else res.redirect("/auth");
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/auth");
  });
});

router.get('/data',(req,res)=>{
    console.log(req.user);
   return res.json({user:req.user})
})

router.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

router.get("/", (req, res) => {
  res.send(req.user ? req.user : "Not logged in,login with Google or facebook");
  console.log(req.user);
});

module.exports = router;
