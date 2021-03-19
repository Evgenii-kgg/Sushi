const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    role: [{
        type: String,
        required: true,
        ref: 'Role'
    }]
});

module.exports = mongoose.model('users', UserSchema);
