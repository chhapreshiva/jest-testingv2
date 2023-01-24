import { screen, render } from "@testing-library/react";
import Footer from "./footer"

describe('login form render', ()=>{
    test('input fields render', ()=>{
        render(<Footer />)
        const footerElement = screen.getByRole('footer')
        expect(footerElement).toBeInTheDocument()
    })
})