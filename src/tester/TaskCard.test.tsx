import { render, screen } from "@testing-library/react";
import TaskCard from "../components/TaskCard";
import { describe, it, expect } from "vitest";

describe("TaskCard", () => {
  it("Visar task card", () => {
    render(
      <TaskCard
        id={1}
        title="Fixa felhantering"
        description="Visa felmeddelanden om fälten är tomma."
        category="UI"
        assignee="Frontend"
        priority="Hög"
        status="todo"
        onDelete={() => {}}
      />,
    );
    expect(screen.getByText("Fixa felhantering")).toBeInTheDocument();
    expect(
      screen.getByText("Visa felmeddelanden om fälten är tomma."),
    ).toBeInTheDocument();
    expect(screen.getByText("UI")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText(/Hög/i)).toBeInTheDocument();
  });
});
