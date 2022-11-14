const express = require("express");
const router = express.Router();
const {
    getAllTodo,
    getTodoByID,
    addTodo,
    deleteTodoByID,
    updateTodoByID,
    deleteAllTodo
} = require("../controllers/todo.controller");

router.get("/", getAllTodo);
router.get("/:id", getTodoByID);
router.post("/add", addTodo);
router.delete("/:id", deleteTodoByID);
router.delete("/", deleteAllTodo);
router.patch("/:id", updateTodoByID);

module.exports = router;