const Task = require('../models/task.model')

exports.create = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

exports.findAll = async (_, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

exports.findOne = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Not Found' })
    res.json(task)
}

exports.update = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: 'Not Found' })
}

exports.remove = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
}
