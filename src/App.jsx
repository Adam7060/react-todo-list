import { useState } from "react";
import "./style.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
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
        <div className="todo-app">
            <h1 className="title">Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <h2 className="title-list">Todo List:</h2>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default App;
