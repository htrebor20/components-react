import { describe, expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import Chip from ".";
import { faArrowTurnDown, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import userEvent from "@testing-library/user-event";

describe("Chip component", () => {
    it("Default render", () => {
        render(<Chip />)
        const chip = screen.getByTestId("chip-wraper")
        expect(chip).toBeInTheDocument()
        expect(chip).toHaveClass('chip--primary');
        expect(chip).toHaveClass('size--m');
        expect(chip).toHaveClass('shapes--rounded');
    })

    it("shoud render shapes squared", () => {
        render(<Chip shapes="squared" />)
        const chip = screen.getByTestId("chip-wraper")
        expect(Chip).toHaveClass("shapes--squared");
    })


    it("shoud render icon", () => {
        render(<Chip icon={faFolderPlus} />)
        const icon = screen.getByTestId("chip-wraper").querySelector('[data-icon="folder-plus"]')
        expect(icon).toBeInTheDocument()
    })

    it("shoud render label", () => {
        render(<Chip label='test' />)
        expect(screen.getByText("test")).toBeInTheDocument()
    })

    it("Should be isLoading", () => {
        render(<Chip isLoading />)
        screen.debug()
        const icon = screen.getByTestId("chip-wraper").querySelector('[data-icon="spinner"]')
        expect(icon).toBeInTheDocument()
    })


    it("should render button inside Chip", async () => {
        const handleClick = vi.fn(); // vitest mock function
        render(<Chip button={{ onClick: handleClick }} />);
        const button = screen.getByTestId("button-wraper");
        expect(button).toBeInTheDocument();
        await userEvent.dblClick(button)
        expect(handleClick).toBeCalledTimes(2)
    });

})

