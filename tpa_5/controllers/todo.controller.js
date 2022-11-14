const Todo = require("../models/todo");

module.exports = {
    getAllTodo: async (req, res) => {
        try {
            const todos = await Todo.find({}, "-__v").populate("user", "name")

            res.status(200).json({
                message: "Getting Data",
                data: todos
            })
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    getTodoByID: async (req, res) => {
        try {
            const todos = await Todo.findById(req.params.id, "-__v")

            if (!todos) {
                res.status(404).json({
                    message: "Could not Found"
                });
            } else {
                res.status(200).json({
                    message: "You Searched for",
                    data: todos
                })
            }
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    addTodo: (req, res) => {
        const newTodo = req.body
        const todo = new Todo(newTodo)

        todo.save()
        res.status(201).json({
            message: "Todo data has been created!",
        })
    },

    deleteTodoByID: async (req, res) => {
        try {
            const todos = await Todo.findById(req.params.id)

            if (!todos) {
                res.status(404).json({
                    message: "Could not Found"
                });
            } else {
                todos.deleteOne()
                res.json({ message: "Data Deleted!" })
            }
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    deleteAllTodo: async (req, res) => {
        try {
            const todos = await Todo.deleteMany();
            res.status(200).json({
                message: "All Data Deleted!",
            });
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    updateTodoByID: async (req, res) => {
        try {
            const todos = await Todo.findById(req.params.id, "-__v")

            Object.assign(todos, req.body)
            todos.save();
            res.status(201).send({
                message: "Todo updated",
                data: todos
            })

        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    }


}