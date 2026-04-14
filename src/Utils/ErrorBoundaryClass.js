import React from 'react';
class ErrorBoundaryClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hasErrors: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log("Error caught in getDerivedStateFromError:", error);
        return { hasErrors: true }
    }

    componentDidCatch(error, errorMessage) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrors) return <div>Errors present</div>
        else return this.props.children
    }
}

export default ErrorBoundaryClass;