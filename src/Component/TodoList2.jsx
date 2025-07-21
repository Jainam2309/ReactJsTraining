import { useState } from "react";

export default function TodoList2() {
    const [input, setInput] = useState("");
    const [todolist, setTodoList] = useState([]);
    const[number,setNumber] = useState("");
    const[email,setEmail] = useState("");

    const addToItem = () => {
           
        if(input.trim() === "" ) return;

        const item = {
            id: todolist.length + 1,
            text: input,
            number:number,
            completed: false,
        };
        setTodoList((prev) => [...prev, item]);
        setInput("");
        setNumber("");
        setEmail("");
    };

    const toggleCompleted = (id) => {
        setTodoList(
            todolist.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const deleteItem = (id) => {
        setTodoList(todolist.filter((t) => t.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                placeholder="Enter Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <input
               type="number"
               placeholder="Enter Number"
               value={number}
               onChange={(e) => setNumber(e.target.value)}
               />

            <button onClick={addToItem}>Add</button>

            <ul>
                {todolist.map((t) => (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.completed}
                            onChange={() => toggleCompleted(t.id)}
                        />
                        <span
                            style={
                                t.completed
                                    ? { textDecoration: "line-through" }
                                    : {}
                            }
                        >
                            {t.text}
                        </span>

                        <span  style={
                                t.completed
                                    ? { textDecoration: "line-through" }
                                    : {}
                            }>
                            
                            {t.number}
                        </span>
                        <button onClick={() => deleteItem(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
