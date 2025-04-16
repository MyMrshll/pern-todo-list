import React, { useState } from "react";

const TaskItem = ({
    todo,
    handleDelete,
    handleStatus
}) => {
const [edit, setEdit] = useState(false);

const [todos, setNewTodos] = useState({
    title: "",
    description: ""
});

const handleUpdate = () =>{
    try {
        fetch(`http://localhost:2100/todos/${todo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todos),    
        })
        setEdit(false)
    }
    catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide" key={todo.id}>
        {todo.created_at.split("T")[0]}
      </li>

      <li className="list-row">
        <div>
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleStatus(todo.id)}
          />
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              className="border-b border-gray-300"
              defaultValue={todo.title}
              onChange={(e) => setNewTodos({ ...todos, title: e.target.value })}
            />
          ) : (
            <h1>{todo.title}</h1>
          )}
          <div className="text-xs uppercase font-semibold opacity-60 mt-1.5">
            {todo.completed ? "Completed" : "Pending"}
          </div>
        </div>
        {edit ? (
            <textarea
              type="text"
              defaultValue={todo.description}
              className="list-col-wrap text-xs"
              onChange={(e) => setNewTodos({ ...todos, description: e.target.value })}
            />
          ) : (
              <p className="list-col-wrap text-xs">{todo.description}</p>
          )}
        <div className="flex sm:flex-row flex-col gap-2 items-start ">
          <>
            <button
              className="btn btn-soft btn-primary"
              onClick={edit ? () => handleUpdate(todo.id, todos): () => setEdit(true)}
            >
              {edit ? "Save" : "Edit"}
            </button>
          </>
          <button
            className="btn btn-soft btn-secondary"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
