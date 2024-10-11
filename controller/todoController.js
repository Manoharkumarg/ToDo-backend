const todoModel = require('../model/todoModel');

exports.createTodo = async(req,res) => {
    const {title,description} = req.body;
    try {
        const newTodo = await todoModel.create({title,description});
        res.status(201).json(newTodo);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

exports.getTodo = async(req,res) => {
    const todos = await todoModel.find();
    res.json(todos);
}

exports.deleteTodo = async(req,res) => {
    const id=req.params.id;
    await todoModel.findByIdAndDelete(id);
    res.status(204).end();
}