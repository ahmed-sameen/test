import { useDebugValue, useEffect, useState } from "react";

const useTodo = (id) => {

    const [todo, setTodo] = useState()

    useEffect(() => {
        if (id) fetchTodo(id)
    }, [id])
    // useDebugValue(todo)

    async function fetchTodo() {
        const response = await fetch("https://dummyjson.com/todos/" + id)
        const data = await response.json();
        setTodo(data)
    }

    return todo;
}

export default useTodo;