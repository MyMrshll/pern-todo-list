const pool = require('../config/database');

exports.show = async () =>{ 
    try {
        const todos = await pool.query('SELECT * FROM todos');
        return todos.rows;
    } catch (error) {
        console.log(error);
    }
}

exports.create = async (title, description) => {
    try {
        const todo = await pool.query('INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
        return todo.rows[0];
    } catch (error) {
        console.log(error);
    }
}

exports.update = async (id, title, description) => {
    try {
        const todo = await pool.query('UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *', [ title, description, id]);
        return todo.rows[0];
    } catch (error) {
        console.log(error);
    }
}
exports.deletes = async (id) => {
    try {
        const todo = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
        return todo.rows[0];
    } catch (error) {
        console.log(error);
    }
}

exports.updateStatus = async (id) => {
    try {
        const todo = await pool.query('UPDATE todos SET completed = NOT completed WHERE id = $1 RETURNING *', [id]);
        return todo.rows[0];
    } catch (error) {
        console.log(error);
    }
}