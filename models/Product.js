const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    weight:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    category:{
        ref: 'categories',
        type: Schema.Types.ObjectId
    },

});

module.exports = mongoose.model('product', ProductSchema);
