import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const List = ({ todos }) => {
  const [localTodos, setLocalTodos] = useState([]);
  // Salin props todos ke local state ketika komponen mount atau todos berubah
  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  const handleStatus = async (id) => {
    try {
      await fetch(`http://localhost:2100/todo/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update state lokal agar UI langsung berubah
      setLocalTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      console.error("Gagal update status", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:2100/todo/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLocalTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Gagal delete todo", err);
    }
  };

  return (
    <>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {localTodos.length === 0 && "Tidak ada list catatan"}
        {localTodos.map((todo) => (
          <React.Fragment key={todo.id}>
           <TaskItem todo={todo} handleDelete={handleDelete} handleStatus={handleStatus} todos={todos} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default List;
