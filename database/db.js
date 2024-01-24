const mongoose = require('mongoose')

const  mongoURI = 'mongodb://127.0.0.1:27017/task-manager';  //myUserAdmin 123
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(mongoURI, options)
    .then(()=>{
        console.log('Connected to MongoDB');
        //Start you application or start additional operations
    })
    .catch((error) =>{
        console.log('Error connecting to MongoDB', error);
    });