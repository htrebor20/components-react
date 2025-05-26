import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from "vitest";
import Button from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';


const fnMock = vi.fn()


describe("Button component", () => {
    it("Default render", () => {
        render(<Button onClick={fnMock} />)
        const btn = screen.getByTestId("button-wraper")
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveClass('button--primary');
        expect(btn).toHaveClass('size--s');
    })
    it("Should display danger style", () => {
        render(<Button onClick={fnMock} buttonStyle='danger' />)
        const btn = screen.getByTestId("button-wraper")
        expect(btn).toHaveClass('button--danger');
    })
    it("Should display size m", () => {
        render(<Button onClick={fnMock} size='m' />)
        const btn = screen.getByTestId("button-wraper")
        expect(btn).toHaveClass('size--m');
    })
    it("Should call onCLick", async () => {
        render(<Button onClick={fnMock} />)
        const btn = screen.getByTestId("button-wraper")
        await userEvent.dblClick(btn)
        expect(fnMock).toBeCalledTimes(2)
    })
    it("Should render label", async () => {
        render(<Button onClick={fnMock} label='as' />)
        expect(screen.getByText("as")).toBeInTheDocument()
    })


    it("Should be disabled", async () => {
        render(<Button onClick={fnMock} isDisabled />)
        const btn = screen.getByTestId("button-wraper")
        expect(btn).toHaveClass("isDisabled")
        expect(btn).toBeDisabled()
    })

    it("Should be isLoading", async () => {
        render(<Button onClick={fnMock} isLoading />)
        const btn = screen.getByTestId("button-wraper")
        expect(btn).toHaveClass("isLoading")
    })

    it("Should render loading spinner when isLoading is true", () => {
            render(<Button onClick={fnMock} isLoading  />)
        screen.debug()
        const spinner = screen.getByTestId("button-wraper").querySelector('[data-icon="spinner"]')
        expect(spinner).toBeInTheDocument()
    })

    
    it("Should render icon start", () => {
        render(<Button onClick={fnMock} icon={{ start: faCoffee }}/>)
        screen.debug()
        const icon = screen.getByTestId("button-wraper").querySelector('[data-icon="mug-saucer"]')
        expect(icon).toBeInTheDocument()
    })

})
