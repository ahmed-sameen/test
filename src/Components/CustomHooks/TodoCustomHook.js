import { useEffect, useState } from "react";
import useTodo from "../../Utils/useTodo";

const TodoCustomHook = () => {
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState([])
    const todo = useTodo(id)

    useEffect(() => {
        if (todo) {
            setTodos(prev => [...prev, todo])
        }
    }, [todo])

    return <div>
        {todos?.map((each) => {
            return <div key={each.id}>{each.todo}</div>
        })}
        <button onClick={() => setId(prev => prev + 1)}>Increase</button>
    </div>
}
export default TodoCustomHook;