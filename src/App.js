import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import "./styles/App.css";


const App = () => {

let initTodo;
if (localStorage.getItem("todos") === null) {
  initTodo = [];
}
else {
  initTodo = JSON.parse(localStorage.getItem("todos"));
}

const onDelete = (todo) => {
  setTodos(todos.filter((e) => {
    return e !== todo;
  }));
  localStorage.setItem("todos", JSON.stringify(todos));

}


const addTodo = (title, desc) => {
  let sno;

  if (todos.length === 0) {
    sno = 0
  }
  else {
    sno = todos[todos.length - 1].sno + 1;
  }

  let myTodo = {
    sno: sno,
    title: title,
    desc: desc
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);


}

const [todos, setTodos] = useState(initTodo);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

return (
  <>
    <h1 className='title'>TODO APP</h1>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
  </>
)
}

export default App
