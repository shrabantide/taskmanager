const User = require('../../database/model/user.model');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');

const signIn = async(req, res) => {
    let {email, password} = req.body;
    try{
        let user = await User.findOne({ email });

        if(!user)
        {
            return res.status(400).send('Email does not exists');
        }
        user.comparePassword(password, (err, match) => {
            if(!match || err) return res.status(400).send('password does not match');
            let token = jwt.sign({_id:user._id}, 'qwertyuiopasdfghjklzxcvbnm', {expiresIn: '24h',
        });
            res.status(200).send({
                token,
                username:user.username,
                email: user.email,
                createdAt : user.createdAt,
                updatedAt: user.updatedAt,
            });
            });
        } catch(error){
            return res.status(400).send('login failed');
        }
};

const register = async(req, res) => {
    console.log(req.body, 'req');

    const { email, password, username } = req.body;
    try{
        if(!username) return res.status(400).send('username is required');

        if(!email) return res.status(400).send('email is required');

        if(!validator.validate(email)){
            return res.status(400).send('Enter valid email id');
        }

        if(!password || password.length<6){
            return res.status(400).send('Enter valid password');
        }

        const userExist = await User.findOne({ email });
        if(userExist){
            return res.status(400).send('email is taken');
        }
        const user = await new User({
            email,
            username, 
            password,
        });
        await user.save();
        return res.status(200).send('user added successfully')
    }catch(error){
        return res, statusbar(400).send('Error in creating user');
    }
    
}

module.exports = {
    signIn,register,
}