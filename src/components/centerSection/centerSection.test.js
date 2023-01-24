import { screen, render } from "@testing-library/react";
import CenterSection from "./centerSection";

describe('test center div elements render', ()=>{
    test('background image render', ()=>{
        render(<CenterSection />)
        const imageElement = screen.getByAltText('bg-image')
        expect(imageElement).toBeInTheDocument()
    })
})