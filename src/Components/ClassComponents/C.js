import React from 'react'
class C extends React.Component {

    constructor(props) {
        super(props)
        console.log("C(C)")
    }

    async componentDidMount(){
        console.log("C(CDM)")
        // const resp = await fetch("https://dummyjson.com/todos");
        // const data = await resp.json();
    }

    render() {
        return console.log("C(R)")
    }
}
export default C;