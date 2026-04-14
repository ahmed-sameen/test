import { useEffect, useState } from "react";

const useTodos = (id) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (id) fetchTodo()
    }, [id])

    async function fetchTodo() {
        const response = await fetch("https://dummyjson.com/todos/" + id)
        const data = await response.json();
        setTodos(prev => [...prev, data])
    }

    return todos;
}

export default useTodos;