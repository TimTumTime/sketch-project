import { render, screen } from "@testing-library/react";
import Canvas from "./Canvas";
import { describe, expect, test } from "vitest";

describe("Rendering the component as intended", () => {
  test("Renders the canvas component within the whole screen", () => {
    const { asFragment } = render(<Canvas />);
    expect(asFragment).toMatchSnapshot();
  });
  test("Renders the canvas component constrained within the topics", () => {
    const { asFragment } = render(<Canvas height={300} width={300} />);
    expect(asFragment).toMatchSnapshot();
  });
});
