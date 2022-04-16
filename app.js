//LOGIN SYSTEM USING SESSION AND COOKIES

const express = require("express")
const app = express()
const path = require("path")
const cookies = require("cookie-parser")
const session = require("express-session")
const {v4: uuidv4} = require("uuid")
const router = require("./router.js")


app.set("view engine","ejs") //from view folder

//parse from data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

 //making the session completely secret and unique
app.use(session({
    secret: "Secret", //382n2992-83nuwuw-iiwonsjjsjsj
    resave:false,
    saveUninitialized:true
}))
 //initializing the routes
app.use('/route', router);

//home routes
app.get('/',(req,res)=>{
    //Rendering a simple html homepage
    res.render('base', {title: "Login System"})
})

const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})