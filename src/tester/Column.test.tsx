import { render, screen } from "@testing-library/react"
import Column from "../components/Column";
import { describe, it, expect } from "vitest";

describe("Column", () => {
    it("Visar titel och children", () => {
        render(
            <Column title="Todo">
                <p>Test task</p>
                </Column>
        );
        expect(screen.getByText("Todo")).toBeInTheDocument();
        expect(screen.getByText("Test task")).toBeInTheDocument();
    });
});