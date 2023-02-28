const Users = require('../models/users');

exports.Signin = async(req, res, next) => {
    const {username, password} = req.body;
    try {
       const check = await Users.findOne({username: username});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
        }
    }catch(e){
        res.json("Error in creating");
    }
}

exports.Signup = async(req, res, next) => {
    const {username, password} = req.body;
    const data = {
        username: username,
        password: password
    }
    try {
       const check = await Users.findOne({username: username});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await Users.insertMany([data])
        }
    }catch(e){
        res.json("Error in creating");
    }
}

