import { useState } from "react"

export default function TodoForm({ addTodo }) {
    const [item, setItem] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        if (item === "") return

        addTodo(item)
        setItem("")
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={(e) => setItem(e.target.value)}
                    value={item}
                    id="item"
                    type="text"
                />
                <button>Add Todo</button>
            </form>
        </>
    )
}
