const router = require("express").Router();
const User = require("../models/User")

// Register
router.post("/register", async (req,res)=>{
    const newUSer = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const user = await newUSer.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err)
    }
})

module.exports = router;