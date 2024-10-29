const express = require('express')
const User = require('../models/User')
const router = express.Router()


//Create a user using: POST "/api/auth" . Doesn't require auth

router.post('/', (req, res) => {
    // obj = {
    //     a: "Name",
    //     b: 34
    // }
    // res.json(obj) 

    console.log(req.body)
    const user = User(req.body);
    user.save();
    res.send(req.body)
})

module.exports = router;