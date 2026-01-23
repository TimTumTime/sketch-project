import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, test, expect } from "vitest";
import HeaderBar from "./HeaderBar.jsx";
import {
  LoginPage,
  LandingPage,
  StructuredLearningPage,
  FreeCanvasPage,
} from "../../pages/index.jsx";

describe("Component functions as intended", () => {
  test("Clicking the Login button navigates to the login page", async () => {
    render(
      <MemoryRouter>
        <HeaderBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /login/i }));
    expect(
      screen.getByRole("input", { name: /username/i })
    ).toBeInTheDocument();
  });

  test("Clicking the account button shows the account dropdown", async () => {
    render(
      <MemoryRouter>
        <HeaderBar isLoggedIn={true} />
      </MemoryRouter>
    );
  });

  test("Clicking the 'Home' button navigates to the home page", async () => {
    render(
      <MemoryRouter>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /home/i }));
    expect(screen.getByText(/Sketch Project/i)).toBeInTheDocument();
  });

  test("Clicking the 'Tutorials' button navigates to the Structured Learning page", async () => {
    render(
      <MemoryRouter>
        <HeaderBar />
        <Routes>
          <Route
            path="/structured-learning"
            element={<StructuredLearningPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /tutorials/i }));
    expect(
      screen.getByRole("button", { name: /beginner/i })
    ).toBeInTheDocument();
  });

  test("Clicking the 'Canvas' button navigates to the Free Canvas Page", async () => {
    render(
      <MemoryRouter>
        <HeaderBar />
        <Routes>
          <Route path="/free-canvas" element={<FreeCanvasPage />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /canvas/i }));
    expect(screen.getByText(/Free Canvas/i)).toBeInTheDocument();
  });
});
