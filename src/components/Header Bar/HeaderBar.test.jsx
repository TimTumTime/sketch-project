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
import { AppProvider } from "../../Context";

describe("Component functions as intended", () => {
  test("Clicking the Login button navigates to the login page", async () => {
    render(
      <MemoryRouter initialEntries={["/free-canvas"]}>
        <AppProvider>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/free-canvas" element={<FreeCanvasPage />} />
            <Route
              path="/structured-learning"
              element={<StructuredLearningPage />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /login/i }));
    expect(
      screen.getByRole("input", { name: /username/i }),
    ).toBeInTheDocument();
  });

  test("Clicking the account button shows the account dropdown", async () => {
    render(
      <MemoryRouter>
        <HeaderBar isLoggedIn={true} />
      </MemoryRouter>,
    );
  });

  test("Clicking the 'Home' button navigates to the home page", async () => {
    render(
      <MemoryRouter initialEntries={["/free-canvas"]}>
        <AppProvider>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/free-canvas" element={<FreeCanvasPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>,
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /home/i }));
    expect(screen.getByText(/Sketch Project/i)).toBeInTheDocument();
  });

  test("Clicking the 'Tutorials' button navigates to the Structured Learning page", async () => {
    render(
      <MemoryRouter initialEntries={["/free-canvas"]}>
        <AppProvider>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/free-canvas" element={<FreeCanvasPage />} />
            <Route
              path="/structured-learning"
              element={<StructuredLearningPage />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /tutorials/i }));
    expect(
      screen.getByRole("button", { name: /beginner/i }),
    ).toBeInTheDocument();
  });

  test("Clicking the 'Canvas' button navigates to the Free Canvas Page", async () => {
    render(
      <MemoryRouter initialEntries={["/structured-learning"]}>
        <AppProvider>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/free-canvas" element={<FreeCanvasPage />} />
            <Route
              path="/structured-learning"
              element={<StructuredLearningPage />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>,
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /Canvas/ }));
    expect(screen.getByText(/Pencil/i)).toBeInTheDocument();
  });

  test("Header bar renders properly on a smaller screen", async () => {
    global.innerWidth = 500;
    render(
      <MemoryRouter>
        <HeaderBar />
      </MemoryRouter>,
    );

    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
