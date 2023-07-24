import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [item, setItem] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        if (item === "") return;

        addTodo(item);
        setItem("");
    }

    return (
        <form
            onSubmit={onSubmit}
            className="form">
            <input
                className="form-input"
                onChange={(e) => setItem(e.target.value)}
                value={item}
                id="item"
                type="text"
            />
            <button
                className="form-button"
                type="onSubmit">
                Add
            </button>
        </form>
    );
};

export default TodoForm;
