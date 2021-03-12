const Product = require('../models/Product')
const error = require('../service/error');

module.exports.addProducts = async (req, res) => {
    try {
        const products = new Product({
            title: req.body.title,
            description: req.body.description,
            weight: req.body.weight,
            price: req.body.price,
        }).save();
        res.status(200).json(products)
    } catch (e) {
        error(res, e)
    }
}

module.exports.getProduct = async (req, res)=>{
    try {
        const product = await new Product({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save();
        res.status(201).json(product)
    } catch (e) {
        error(res, e)
    }
};

module.exports.removeProducts = async (req, res) => {
    try {
        await Product.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Позиция была удалена'
        })
    } catch (e) {
        error(res, e)
    }
}
