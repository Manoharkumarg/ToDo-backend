const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: String
});

const todoModel = mongoose.model('Todo',todoSchema);

module.exports = todoModel;