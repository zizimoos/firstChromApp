const todoForm = document.querySelector(".js-form_todo"),
  todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

let ToDoArray = [];

const loadTodos = () => {
  const loadedTodos = localStorage.getItem("todos");
  if (loadedTodos) {
    // console.log(loadedTodos);
    const pasredTodos = JSON.parse(loadedTodos);
    // console.log(pasredTodos);
    pasredTodos.forEach((element) => {
      // console.log(element.todo);
      paintTodos(element.todo);
    });
  }
};

const saveTodosLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(ToDoArray));
};

const deleteTodo = (event) => {
  const li = event.target.parentNode;
  todoList.removeChild(li);
  const cleanToDos = ToDoArray.filter(
    (element) => element.id !== Number(li.id)
  );
  // console.log(cleanToDos);
  ToDoArray = cleanToDos;
  saveTodosLocalStorage();
};

const paintTodos = (todo) => {
  // console.log("painttodo", todo);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Math.floor(Math.random() * 10000000);
  delBtn.innerText = "DEL";
  delBtn.addEventListener("click", deleteTodo);
  doneBtn.innerText = "Done";
  span.innerText = todo;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  todoList.appendChild(li);

  const toDoObj = {
    todo: todo,
    id: newId,
  };
  ToDoArray.push(toDoObj);
  saveTodosLocalStorage();
};

const handleSubmitTodo = (event) => {
  event.preventDefault();
  const todo = todoInput.value;
  paintTodos(todo);
  todoInput.value = "";
};

const initToDo = () => {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmitTodo);
};
initToDo();
