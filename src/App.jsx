import { useState } from "react";
import "./style.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(item) {
        setTodos((currentTodos) => {
            return [...currentTodos, { id: crypto.randomUUID(), title: item, checked: false }];
        });
    }

    function toggleTodo(id, checked) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, checked };
                }
                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => {
                return todo.id !== id;
            });
        });
    }

    return (
        <>
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <h1>Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}
