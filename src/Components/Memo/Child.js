import { memo } from 'react';

const Child = ({ number }) => {
    console.log("child")
    return <div>{number}</div>
}

export default memo(Child);