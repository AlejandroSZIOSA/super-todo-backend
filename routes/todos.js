const express = require("express");

const todosController = require("../controllers/todos"); //the name of this const can be anything /import

const router = express.Router();

router.get("/todos", todosController.getTodos); //param 2 is the controller function

router.post("/todo", todosController.createTodo);

module.exports = router;
