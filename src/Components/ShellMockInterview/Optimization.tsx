import React, { useCallback, useState } from "react"

const Optimization = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    const handleOnIncrementB = useCallback(() => {
        setCountB(prev => prev + 1)
    }, [])

    return (
        <div>
            <p>count A: {countA}</p>
            <button onClick={() => setCountA(prev => prev + 1)}> Incement count A</button>
            <MemoimizedChild onIncrementB={handleOnIncrementB} countB={countB} />
        </div>
    )
}

type ChildProps = {
    onIncrementB: () => void,
    countB: number
}

const Child = ({ onIncrementB, countB }: ChildProps) => {
    console.log("Child: Renderin...")

    return (
        <div>
            <p>Count B: {countB}</p>
            <button onClick={onIncrementB}>Increment count B</button>
        </div>
    )
}
const MemoimizedChild = React.memo(Child)

export default Optimization