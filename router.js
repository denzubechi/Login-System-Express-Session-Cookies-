
var express= require("express");
var router = express.Router();

//Creating values as database
const credential = {
    email: "samuel@gmail.com",
    password: "1234"
}
//login User
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
       res.redirect('/route/dashboard')  //Redirects to the dashboard ejs file
       //res.send("Login Successful")
    }
    else{
        res.end("Invalid Username")
    }
})

//route for dashboard
//Created when user initializes a session
router.get('/dashboard', (req,res)=>{
    if(req.session.user){
        //returning the response(an ejs file) i.e the dashboard
        res.render('dashboard', {user:req.session.user})
    }
    else{
        res.send("Unauthorized User")
    }
})

//route for logout
router.get('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send(Error)
        }
        else{
            res.render('base', {title: "Express", logout:"Logout Successfully"})
        }
    })
})
module.exports = router