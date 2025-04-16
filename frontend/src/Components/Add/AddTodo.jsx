import React from "react";
import { useState } from "react";
const AddTodo = ({setAdd}) => {
  const handleClose = () => {
    setAdd(false);
  }


  const handleInput = (e) => {
    setTodos({...todos, [e.target.name]: e.target.value})
  }

  const [todos, setTodos] = useState({});
  const handleAdd = () => {
   try {
    fetch("http://localhost:2100/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todos),
    })
    .then((res) => res.json())
    .then((resData) => console.log(resData));
   } catch (error) {
    console.log(error)
   }
    
  }
  return (
    <>
    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">

      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <div className="flex w-full place-content-between">
        <legend className="fieldset-legend">Add Todo</legend>
        <legend className="fieldset-legend mr-2 hover:cursor-pointer hover:text-error text-xl" onClick={handleClose}>X</legend>

        </div>
        <label className="fieldset-label">Title</label>
        <input type="text" className="input" placeholder="title" name="title" value={todos.title} onChange={handleInput}/>

        <label className="fieldset-label">Description</label>
        <textarea type="description" className="input h-24 pt-2" name="description" placeholder="description" value={todos.description} onChange={handleInput}/>
      <button className="btn btn-primary mt-4 mb-2" onClick={handleAdd}>Add</button>
      </fieldset>

    </div>
    </>
  );
};

export default AddTodo;
