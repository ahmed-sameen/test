import React from 'react'
class B extends React.Component {

    constructor(props) {
        super(props)
        console.log("B(C)")
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("SCU", nextProps, nextState, this.state) // ns=>1 s=>0
        return true
    }

    async componentDidMount() {
        console.log("B(CDM)")
        // const resp = await fetch("https://dummyjson.com/todos");
        // const data = await resp.json();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("CDU", prevProps, prevState, this.state) //ps=> 0 s=> 1 

    }

    render() {
        return <div>
            {console.log("B(R)")}
            <div>{this.state.count}</div>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>increase count in B</button>
        </div>
    }
}
export default B;

