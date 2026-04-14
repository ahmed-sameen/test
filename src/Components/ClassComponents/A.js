import React from 'react'
import B from './B'
import C from './C'
export class A extends React.Component {

    constructor(props) {
        super(props)
        console.log("A(C)")
        this.state = {
            count: 0
        }
    }

    async componentDidMount() {
        console.log("A(CDM)")
        // const resp = await fetch("https://dummyjson.com/todos");
        // const data = await resp.json();
    }

    render() {
        return (
            <div>
                {console.log("A(R)")}
                <B />
                <C />
                <button onClick={() => { throw new Error("Button click error"); }}>
                    Throw Error
                </button>

            </div>
            // <div>
            //     <div>
            //         {this.props.name.toUpperCase()} {this.state.count}
            //     </div>
            //     <button onClick={() => this.setState({ count: this.state.count + 1 })}>update count</button>
            // </div>
        )
    }
} 