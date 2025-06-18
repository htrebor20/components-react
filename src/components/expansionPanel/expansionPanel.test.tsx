import { describe, expect, it } from "vitest"
import ExpansionPanel from "."
import { render, screen } from "@testing-library/react"

describe("ExpansionPanel component", () => {
    it("shoud render test label", () => {
        render(<ExpansionPanel label="test expancion panel" isExpanded={false} />)
        expect(screen.getByText("test expancion panel")).toBeInTheDocument()
    })

    it("shoud render ", () => {
        render(<ExpansionPanel label="test expancion panel" isExpanded />)
        const icon = screen.queryByTestId("expansionPanel-icon")
        screen.debug()
        expect(icon).toBeNull()      
    })
})