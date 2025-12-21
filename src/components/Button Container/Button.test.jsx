import { render, fireEvent, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import Button from "./Button";
import { vi } from "vitest";

describe("Rendering the component properly", () => {
  test("Render a level component", () => {
    const { getByText } = render(
      <Button
        useCase="level"
        title="Placeholder Level"
        info="Placeholder Info"
        topics={["Topic 1", "Topic 2"]}
      />
    );
    const titleElement = getByText("Placeholder Level");
    expect(titleElement).toBeInTheDocument();
  });
  test("Render a topic component", () => {
    const { asFragment } = render(
      <Button
        useCase="topic"
        title="Placeholder Topic"
        info="Placeholder Info"
        proficiency="Beginner"
        hours={0}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
});

describe("Component functions as intended", () => {
  test("Clicking the button triggers the handleClick function", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button
        useCase="level"
        title="Placeholder Level"
        info="Placeholder Info"
        topics={["Topic 1", "Topic 2"]}
        handleClick={handleClick}
      />
    );
    fireEvent.click(getByText("Placeholder Level"));
    expect(handleClick).toHaveBeenCalled();
  });
});
