const express = require ("express");
const router = express.Router();
const Register = require('../models/registerModel')


router.get("/register",(req,res)=>{
    res.render("register")
});

router.post("/signup", async(req,res)=>{
    console.log(req.body)
    try{
        const user = await Register(req.body);
       
       await user.save()
        res.redirect("/register")
       
    
    }
    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})

module.exports = router