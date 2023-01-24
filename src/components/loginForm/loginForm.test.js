import { screen, render } from "@testing-library/react";
import  user  from "@testing-library/user-event";
import LoginForm from "./loginForm";

describe('login form render', ()=>{
    test('input fields render', ()=>{
        render(<LoginForm />)
        const emailLabelElement = screen.getByRole('email')
        expect(emailLabelElement).toBeInTheDocument()

        const emailinputElement = screen.getByPlaceholderText('Enter email')
        expect(emailinputElement).toBeInTheDocument()

        const passwordLabelElement = screen.getByRole('password')
        expect(passwordLabelElement).toBeInTheDocument()

        const pwdinputElement = screen.getByPlaceholderText('Enter password')
        expect(pwdinputElement).toBeInTheDocument()
    })

    test('login button render', ()=>{
        render(<LoginForm />)
        const loginBtnElement = screen.getByRole('button')
        expect(loginBtnElement).toBeInTheDocument()
    })

    // test('btn click test', ()=>{
    //     user.setup()
    //     render(<LoginForm />)
    //     const buttonElement = screen.getByRole('button')
    //     user.click(buttonElement)
    // })
})