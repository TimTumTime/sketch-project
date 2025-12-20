import { render } from "@testing-library/react";
import StructuredLearningPage from "./StructuredLearningPage";
import { describe, expect, test } from "vitest";

describe("Rendering the page as intended", () => {
  test("Renders the canvas component within the whole screen", () => {
    render(<StructuredLearningPage />);
  });
});
