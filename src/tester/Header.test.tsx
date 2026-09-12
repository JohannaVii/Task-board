import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Header", () => {
  it("Visar titeln och undertiteln", () => {
    render(<Header />);
    expect(screen.getByText("Task board")).toBeInTheDocument();
    expect(screen.getByText("Drift och statushantering")).toBeInTheDocument();
  });
});