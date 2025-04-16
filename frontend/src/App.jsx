import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./Components/List/List";
import AddTodo from "./Components/Add/AddTodo";


function App() {
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetch("http://localhost:2100/todos")
      .then((res) => res.json())
      .then((resData) => setTodos(resData.data));
  }, [todos]);
  return (
    <div className="relative container mx-auto h-screen w-full">
      <h1 className="text-3xl font-bold ">Website Catatan TodoList</h1>
      <button className="btn btn-primary my-6" onClick={() => setAdd(true)}>
        Add Todo
      </button>
      {add && <AddTodo setAdd={setAdd} />}
      <List todos={todos} setEdit={setEdit}/>
    </div>
  );
}

export default App;
