const mongoose = require('mongoose');

//schema design
const userSchema = new mongoose.Schema({
         name: {
             type: String,
             required: [true, 'Please provide your name'],
         },
            email: {
                type: String,
                required: [true, 'Please provide your email and it must be unique'],
                unique: true,
            },
            password:{
                type : String,
                required: [true, 'Please provide your password'],
            }
},{timesstamp: true}
);

//export model
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;