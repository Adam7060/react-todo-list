const TodoItem = ({ checked, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                    toggleTodo(id, e.target.checked);
                }}
            />
            {title}
            <button
                type="button"
                onClick={() => deleteTodo(id)}
                className="btn-delete">
                DELETE
            </button>
        </li>
    );
};

export default TodoItem;
