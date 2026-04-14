import { render, screen } from "@testing-library/react"
import Header from "../Components/Routing/Header/Header"
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"


test("render header", () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const headerDiv = screen.getByTestId("headers")
    expect(headerDiv).not.toBeInTheDocument()
})