import { render, screen } from "@testing-library/react";
import Canvas from "./Canvas";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Rendering the component as intended", () => {
  test("Renders the canvas component within the whole screen", () => {
    const { asFragment } = render(<Canvas />);
    expect(asFragment).toMatchSnapshot();
  });
  test("Renders the canvas component constrained within a container", () => {
    const { asFragment } = render(<Canvas height={300} width={300} />);
    expect(asFragment).toMatchSnapshot();
  });
});

describe("Component functions as intended", () => {
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
