const todos = [
  { id: "1", title: "t1", description: "d1" },
  { id: "2", title: "t2", description: "d2" },
];

export const getTodos = (req, res) => {
  //add status code when make responses important
  //200 = Success
  res.status(200).json({
    todos: todos,
  });
};

export const createTodo = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const newTodo = {
    id: new Date().toISOString(),
    title: title,
    description: description,
  };
  todos.push(newTodo);
  //code 201 = created a resources
  res.status(201).json({
    message: "Created Todo Success",
    todo: newTodo,
  });
};
