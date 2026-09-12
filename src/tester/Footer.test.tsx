import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { describe, it, expect } from "vitest";

describe ("Footer", () => {
    it("Visar texten i Footer", () => {
        render(<Footer />);
            expect(screen.getByText("Drivs av React v 1.0.0")).toBeInTheDocument();
    });
});