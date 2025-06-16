import { describe, expect, it, vi } from "vitest"
import Title from ".";
import userEvent from "@testing-library/user-event";
import { render, screen } from '@testing-library/react';

import Button from "../../../../components/button";


describe("Title component", () => {
    it("shoud render title", () => {
        render(<Title />)
        expect(screen.getByText("Inicio")).toBeInTheDocument()
    })

    it("shoud render title", () => {
        render(<Title />)
        const titulo = screen.getByTestId("title-wraper");
        expect(titulo).toHaveTextContent("Encuentra la informacion mas relevante sobre tus modelos y asientos contables.");
    })
})


