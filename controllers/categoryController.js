const CategoryController = require('../models/Category');
// const Position = require('../models/Position');
const errorHandlers = require('../service/error');

module.exports.getAll = async (req, res)=>{
    try {
        const categories = await CategoryController.find({user: req.user.id});
        res.status(200).json(categories);
    } catch (e) {
        errorHandlers(res, e)
    }
};

module.exports.getById = async (req, res)=>{
    try {
        const category = await CategoryController.findById(req.params.id);
        res.status(200).json(category);
    } catch (e) {
        errorHandlers(res, e)
    }
};

module.exports.remove = async (req, res)=>{
    try {
        await CategoryController.remove({_id: req.params.id});
        // await Position.remove({category: req.params.id});
        res.status(200).json({
            message: 'Категория удалена'
        });
        res.status(200).json(category);
    } catch (e) {
        errorHandlers(res, e)
    }
};

module.exports.create = async (req, res)=>{
    const category = new CategoryController({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    });
    try {
        await category.save();
        res.status(201).json(category);
    } catch (e) {
        errorHandlers(res, e)
    }
};

module.exports.update = async (req, res)=>{
    const updated = {
        name: req.body.name
    };

    if (req.file){
        updated.imageSrc = req.file.path
    }

    try {
        const category = await CategoryController.findOneAndUpdate({_id: req.params.id}, {$set: updated}, {new: true});
        res.status(200).json(category);
    } catch (e) {
        errorHandlers(res, e)
    }
};

