import { render } from "@testing-library/react";
import FreeCanvasPage from "./FreeCanvasPage";
import { describe, expect, test, vi } from "vitest";
import { AppContext, AppProvider } from "../../Context";

describe("Rendering the page as intended", () => {
  test("Renders the Free Canvas Page", () => {
    const { asFragment } = render(
      <AppProvider>
        <FreeCanvasPage />
      </AppProvider>
    );
    expect();
  });
});
