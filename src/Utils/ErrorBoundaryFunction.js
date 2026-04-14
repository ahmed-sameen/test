const ErrorBoundaryFunction = ({ error, resetErrorMessage }) => {

    return <div>
        <div>{error}--------</div>
        <button onClick={resetErrorMessage}>Reset</button>
    </div>
}

export default ErrorBoundaryFunction;