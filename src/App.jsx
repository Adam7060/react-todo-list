import { useState } from 'react';
import './style.css';

export default function App() {
    const [todos, setTodos] = useState('');
    const [item, setItem] = useState('');

    function addTodo(e) {
        e.preventDefault();

        if (item === '') return;
        setTodos((currentTodos) => {
            return [...currentTodos, { id: crypto.randomUUID(), title: item, checked: false }];
        });

        setItem('');
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
            <form onSubmit={addTodo}>
                <input onChange={(e) => setItem(e.target.value)} value={item} id="item" type="text" />
                <button>Add Todo</button>
            </form>
            <h1>Todo List</h1>
            <ul>
                {todos &&
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    id="completed"
                                    checked={todo.checked}
                                    onChange={(e) => {
                                        toggleTodo(todo.id, e.target.checked);
                                    }}
                                />
                                {todo.title}
                                <button
                                    onClick={() => {
                                        deleteTodo(todo.id);
                                    }}
                                >
                                    Delete Todo
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}
