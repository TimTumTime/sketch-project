import { render, screen } from "@testing-library/react";
import Canvas from "./Canvas";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Phase 2", () => {
  vi.mock("react-konva", () => ({
    Stage: ({ children, ...props }) => (
      <div data-testid="stage" {...props}>
        {children}
      </div>
    ),
    Layer: ({ children }) => <div>{children}</div>,
    Line: ({ points }) => (
      <div data-testid="line" data-points={points.join(",")} />
    ),
  }));

  test("Drawing on the canvas", async () => {
    render(<Canvas />);
    const user = userEvent.setup();

    const stage = screen.getByTestId("canvas-stage");

    await user.pointer([
      { keys: "[MouseLeft>]", target: stage, coords: { x: 10, y: 5 } },
      { coords: { x: 20, y: 50 } },
      { keys: "[/MouseLeft]" },
    ]);

    const lines = screen.getAllByTestId("line");

    expect(lines.length).toBe(1);
  });
});

describe("Phase 3", () => {
  vi.mock("react-konva", () => ({
    Stage: ({ children, ...props }) => (
      <div data-testid="stage" {...props}>
        {children}
      </div>
    ),
    Layer: ({ children }) => <div>{children}</div>,
    Line: ({ points }) => (
      <div data-testid="line" data-points={points.join(",")} />
    ),
  }));

  test("Changing the thickness in the toolbar changes the strokeWidth", () => {});

  test("Changing the color works", () => {});

  test("Pressure detection for the canvas component works", () => {});

  test("Pressing L-CTRL + Z undos the stroke", {});
});
