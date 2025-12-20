import { render, screen } from "@testing-library/react";
import FreeCanvasPage from "./FreeCanvasPage";
import { describe, expect, test } from "vitest";

describe("Rendering the page as intended", () => {
  test("Renders the Free Canvas Page", () => {
    render(<FreeCanvasPage />);
  });
});
