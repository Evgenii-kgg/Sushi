const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    count:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },

});

mongoose.model('product', ProductSchema);
