const Product = require('../models/Product')
const error = require('../service/error');

module.exports.addProducts = async (req, res) => {
    try {
        const products = new Product({
            title: req.body.title,
            description: req.body.description,
            weight: req.body.weight,
            price: req.body.price,
            category: req.body.category,
        }).save();
        res.status(200).json(products)
    } catch (e) {
        error(res, e)
    }
}

module.exports.getProduct = async (req, res)=>{
    try {
        const product = await Product.find({
            title: req.title.id,
            category: req.param.category
        });
        res.status(201).json(product)
    } catch (e) {
        error(res, e)
    }
};

module.exports.removeProduct = async (req, res) => {
    try {
        await Product.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Позиция была удалена'
        })
    } catch (e) {
        error(res, e)
    }
}

module.exports.updateProduct = async (req, res)=>{
    try {
        const position = await Position.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
        res.status(200).json(position)
    } catch (e) {
        error(res, e)
    }
};
