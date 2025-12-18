import { expect, test } from "vitest";
import { Canvas, Toolbar } from "../components";
import { LandingPage, LevelsPage, FreeCanvasPage } from "../pages";
import { render } from "@testing-library/react";

test("renders the landing page", () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/Sketch Project/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the free canvas page", () => {
  render(<FreeCanvasPage />);
  const linkElement = screen.getByText(/Free Canvas/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the levels page", () => {
  render(<LevelsPage />);
  const linkElement = screen.getByText(/Levels/i);
  expect(linkElement).toBeInTheDocument();
});
