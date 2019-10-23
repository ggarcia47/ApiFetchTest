const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    owner: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthday:{
        type: Date,
        requierd: true,
        default : Date.now
    }  
});

module.exports = mongoose.model('dog',dogSchema);