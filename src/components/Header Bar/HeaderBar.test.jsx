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
  AccountPage,
} from "../../pages/index.jsx";
import { AppProvider } from "../../Context";

describe("Phase 2", () => {
  test("Clicking the Login button navigates to the login page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
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
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /Login/i }));
    expect(screen.getByText("Don't have an account? Sign Up"));
  });

  test("Clicking the account button navigates to the account page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppProvider>
          <HeaderBar isLoggedIn={true} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/free-canvas" element={<FreeCanvasPage />} />
            <Route
              path="/structured-learning"
              element={<StructuredLearningPage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /account/i }));
    expect(screen.getByText("AccountPage")).toBeInTheDocument();
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
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /home/i }));
    expect(screen.getByText(/Structured Learning/i)).toBeInTheDocument();
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
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /Canvas/ }));
    expect(screen.getByText(/Pencil/i)).toBeInTheDocument();
  });
});
