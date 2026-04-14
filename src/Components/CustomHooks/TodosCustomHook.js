import { useEffect, useState } from "react";
import useTodo from "../../Utils/useTodo";
import useTodos from "../../Utils/useTodos";

const TodosCustomHook = () => {
    const [id, setId] = useState(0);
    const todos = useTodos(id)

    return <div>
        {todos?.map((each) => {
            return <div key={each.id}>{each.todo}</div>
        })}
        <button onClick={() => setId(prev => prev + 1)}>Increase</button>
    </div>
}
export default TodosCustomHook;