import React from 'react'
type TSinReactProps = {
    count: number,
    styles: React.CSSProperties,
    handleSubmit: (id: number) => void,
    children: React.ReactElement,
    setCount: React.Dispatch<React.SetStateAction<number>>
}
// const TSinReact: React.FC<TSinReactProps> = (): React.ReactElement => {
const TSinReact = (props: TSinReactProps): React.ReactElement => {
    return <div style={props.styles} onClick={() => props.handleSubmit(1)}>hi
        {props.children}</div>
}

export default TSinReact;