const express = require("express");
const bodyParser = require("body-parser"); //Parse the content to json when are using requests

const ROOT_PORT = 8080;

//register the todos routes in the app
const todosRoutes = require("./routes/todos");

const app = express();

app.use(bodyParser.json()); //Parse the content to json when are using requests

//Fix cords problem :)
//Adding Header to the requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Origin", "Content-type,Authorization");
  next(); //The function continues the execution
});

app.use("/todos", todosRoutes); //any incoming request
app.listen(ROOT_PORT);
