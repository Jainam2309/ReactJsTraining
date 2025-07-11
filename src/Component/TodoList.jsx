

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["sample task"]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");


  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };


  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };


  let deleteSingleTask = (indexToDelete) => {
    let updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };


  let deleteAllTasks = () => {
    setTodos([]);
  };

  let updateAllToUppercase = () => {
    let upperTodos = todos.map((todo) => todo.toUpperCase());
    setTodos(upperTodos);
  };

  let updateAllToLowercase = () => {
    let lowerTodos = todos.map((todo) => todo.toLowerCase());
    setTodos(lowerTodos);
  };

  let handleAddKey = (event) => {
    if (event.key === "Enter") {
      addNewTask();
    }
  };

  let uppercaseSingleTask = (indexToUpdate) => {
    let updatedTodos = todos.map((todo, index) =>
      index === indexToUpdate ? todo.toUpperCase() : todo
    );
    setTodos(updatedTodos);
  };

  let startEditing = (index) => {
    setEditingIndex(index);
    setEditedText(todos[index]);
  };


  let saveEditedTask = () => {
    let updatedTodos = [...todos];
    updatedTodos[editingIndex] = editedText;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditedText("");
  };

  let handleEditKey = (event) => {
    if (event.key === "Enter") {
      saveEditedTask();
    }
  };



  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        onKeyDown={handleAddKey}
      />
      <button onClick={addNewTask} style={{ marginLeft: "10px" }}>Add Task</button>
      <button
        onClick={deleteAllTasks}
        style={{
          marginLeft: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Delete All Tasks
      </button>

      <hr />
      <h3>Tasks Todo</h3>
      {todos.length === 0 ? (
        <p>No tasks remaining.</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={handleEditKey}
                  />
                  <button
                    onClick={saveEditedTask}
                    style={{
                      marginLeft: "15px",
                      backgroundColor: "green",
                      color: "white",
                    }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo}{" "}
                  <button
                    onClick={() => deleteSingleTask(index)}
                    style={{
                      marginLeft: "10px",
                      marginBottom: "10px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => uppercaseSingleTask(index)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#007bff",
                      color: "white",
                    }}
                  >
                    Uppercase
                  </button>
                  <button
                    onClick={() => startEditing(index)}
                    style={{
                      marginLeft: "15px",
                      backgroundColor: "green",
                      color: "white",
                    }}
                  >
                    Update
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <br></br>
      <button onClick={updateAllToUppercase}>UpperCaseAll</button>
      <br></br>
      <button onClick={updateAllToLowercase} style={{ marginTop: "15px" }}>LowerCaseAll</button>
    </div>
  );
}



