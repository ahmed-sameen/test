import { useEffect, useState } from "react";
import {  useLazyGetTodoDataQuery } from "../../Utils/todoAPISlicee";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Utils/todoSlice";

const RTKTodoApi = () => {
    const [id, setId] = useState(0)
    const dispatch = useDispatch()
    const { todos } = useSelector(store => store.todoSlice);
    const [trigger, { data, error, isLoading }] = useLazyGetTodoDataQuery()


    useEffect(() => {
        if (id) trigger(id)
    }, [id])

    useEffect(() => {
        if (data) dispatch(addTodo(data))
    }, [data])

    return <div>
        {isLoading && <div>Loading . . . </div>}
        {todos && todos?.map(each => <div key={each?.id}>{each?.todo}</div>)}
        <button onClick={() => setId(prev => prev + 1)}>Increase todo</button>
    </div>
}

export default RTKTodoApi;