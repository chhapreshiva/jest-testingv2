import { render, screen } from "@testing-library/react"
import Application from "../application/application"
// import user from "@testing-library/user-event"


// describe('test login form', ()=>{
//     test('form elements', ()=>{
//         render(<Application />)
//         const headingElement = screen.getByRole('heading', {level : 1})
//         expect(headingElement).toBeInTheDocument()

//         const subHeadingElement = screen.getByRole('heading', {level : 5})
//         expect(subHeadingElement).toBeInTheDocument()

//         const usernameElement = screen.getByRole('username')
//         expect(usernameElement).toBeInTheDocument()

//         const passwordElement = screen.getByRole('password')
//         expect(passwordElement).toBeInTheDocument()

//         const submitElement = screen.getByRole('login')
//         expect(submitElement).toBeInTheDocument()

//         const logoutElement = screen.queryByRole('logout')
//         expect(logoutElement).not.toBeInTheDocument()

//         const listElement = screen.getAllByRole('listitem')
//         expect(listElement).toHaveLength(4)

//         const countElement = screen.getByRole('count') 
//         expect(countElement).toBeInTheDocument(5)
//     })

//     test("counter", async()=>{
//         user.setup()
//         render(<Application />)
//         const counterElement = screen.getByRole('button',{
//             name:'counter'
//         })

//         await user.click(counterElement)
//         const countElement = screen.getByRole('count') 
//         expect(countElement).toBeInTheDocument(1)
//     })

//     test('directUpdateCount', async()=>{
//         user.setup()
//         render(<Application />)
//         const usernameElement = screen.getByRole('username')
//         await user.type(usernameElement, '10')

//         const updatedCountElement = screen.getByRole('count')
//         expect(updatedCountElement).toBeInTheDocument('10')
//     })

// })


describe('test application render', ()=>{
    test('child Elements', ()=>{
        render(<Application />)
        
        const appContainerElement = screen.getByRole('app-container')
        expect(appContainerElement).toBeInTheDocument()
    })

})