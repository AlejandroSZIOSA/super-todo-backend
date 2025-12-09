const express = require("express");
const PORT = 8080;

//register the todos routes in the app
const todosRoutes = require("./routes/todos");

const app = express();

app.use("/todo", todosRoutes); //any incoming request
app.listen(PORT);
