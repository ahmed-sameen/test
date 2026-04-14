import React, { useCallback, useState } from "react";

function MockInterviewQuestions(): React.ReactElement {
    const [count, setCount] = useState<number>(0);
    const handleUpdateCount = useCallback((): void => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ color: '#5C6AC4' }}>
                Hello world
            </h1>
            <div>
                <button onClick={handleUpdateCount}>
                    count {count}
                </button>
            </div>
            <Test count={1} handleUpdateCount={handleUpdateCount} />
        </div>
    )
}

const Test = React.memo(function Test({ count, handleUpdateCount }: { count: number, handleUpdateCount: () => void }) {
    console.log("child")
    return (
        <>
            <p>Test Component</p>
            <p>random number - {Math.random()}</p>
            <p>count from children -{count}</p>
        </>
    )
})

// const MemoizedTest = React.memo(Test);// another way to wrap

export default MockInterviewQuestions;