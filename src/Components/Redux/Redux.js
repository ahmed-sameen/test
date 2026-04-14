import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoThunk from "../../Utils/todoThunk";

const Redux = () => {
    const [id, setId] = useState(0);
    const dispatch = useDispatch()

    const { loading, todos } = useSelector(store => store.todoSlice)

    useEffect(() => {
        if (id) dispatch(todoThunk(id))
    }, [id])

    return <div>
        <button onClick={() => setId(prev => prev + 1)}>Get Next</button>
        {todos?.map((each) => {
            return <div key={each.id}>{each.todo}</div>
        })}
        {loading && <div>Loading . . . . . . .</div>}
    </div>
}

export default Redux;