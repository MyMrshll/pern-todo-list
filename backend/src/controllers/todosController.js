const { show, create, update, deletes, updateStatus } = require('../services/services');

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await show();
        res.status(200).json({
            message: "Todos fetched successfully",
            data: todos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
        next(error);
    }
};


exports.createTodo = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const todo = await create(title, description);
        return res.status(201).json({
            message: "Todo created successfully",
            data: todo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
        next(error);
    }
};


exports.updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await update(id, title, description);
        if(!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json({
            message: "Todo updated successfully",
            data: todo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
        next(error);
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await deletes(id);
        return res.status(200).json({
            message: "Todo deleted successfully",
            data: todo
        });
    } catch (error) {
        next(error);
        return res.status(500).json({ error: error.message });
    }
}

exports.updateTodoStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await updateStatus(id);
        if(!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json({
            message: "Todo updated successfully",
            data: todo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
        next(error);
    }
}