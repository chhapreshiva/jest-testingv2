import { screen, render } from "@testing-library/react";
import Navbar from "./navbar"

describe('navbar render', ()=>{
    test('navbar render', ()=>{
        render(<Navbar />)
        const navbarElement = screen.getByRole('navbar')
        expect(navbarElement).toBeInTheDocument()
    })
})