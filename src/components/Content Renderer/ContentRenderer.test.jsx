import { getByRole, render, screen } from "@testing-library/react";
import ContentRenderer from "./ContentRenderer";
import { describe, expect, test } from "vitest";
import { lessonBasicMock, lessonStandardMock } from "../../data";

describe("Phase 2", () => {
  test("Content renders with no data", async () => {
    render(<ContentRenderer />);

    expect(screen.getByText("There was no data!"));
  });

  test("Content renders with standard data with no canvas component", async () => {
    render(<ContentRenderer content={lessonBasicMock} />);

    expect(screen.getByText(/This is a fake title/i));
    expect(screen.getByText(/Fake Topic/i));
    expect(screen.getByText(/This is a fake paragraph/i));
    expect(screen.getByAltText(/This is a fake image/i));
  });

  test("Content renders with standard data and a canvas component", () => {
    const { getAllByRole } = render(
      <ContentRenderer content={lessonStandardMock} />
    );

    const canvasElement = getAllByRole("option");

    expect(screen.getByText(/This is a fake title/i));
    expect(screen.getByText(/Fake Topic/i));

    expect(canvasElement).length.lessThanOrEqual(2);
  });
});
