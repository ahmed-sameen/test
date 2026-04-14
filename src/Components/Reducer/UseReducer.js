import { useReducer } from "react";

function ageReducer(state, action) {
    if (action.type == "inc") {
        state = { ...state, age: state.age + 1 }
    } else if (action.type == "dec") {
        state = { ...state, age: state.age - 1 }
    } else state = { ...state, age: action.value }
    return state;
}

const UseReducer = () => {

    const [ageState, ageAction] = useReducer(ageReducer, { age: 20 })

    return <div>
        <div>{ageState.age}</div>
        <button onClick={() => ageAction({ type: "inc" })}>increase</button>
        <button onClick={() => ageAction({ type: "dec" })}>decrease</button>
        <button onClick={() => ageAction({ value: 20 })}>Default</button>

    </div>
}

export default UseReducer;