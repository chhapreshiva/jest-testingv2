import { screen, render, waitFor } from "@testing-library/react";
import DummyData from "./dummyData"
import * as api from "../../mocks/api"
import { UserEvent } from "@testing-library/user-event";

jest.mock("../../mocks/api")
describe('dynamic home page render', ()=>{
    test('home page container render', ()=>{
        render(<DummyData />)
        const DummyDataElement = screen.getByRole('home-page')
        expect(DummyDataElement).toBeInTheDocument()
    })

    test('api response', async()=>{
        render(<DummyData />)
        const cardElements = await screen.findAllByRole('card')
        expect(cardElements).toHaveLength(3)
    })
})