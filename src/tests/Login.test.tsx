import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../pages/Login";

describe("Login Component", () => {
  test("renders login form with inputs and button", () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("calls onLogin when valid credentials are entered", async () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    // Inputs-a dəyər yaz
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });

    // Login düyməsinə klik et
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // setTimeout 1s olduğuna görə waitFor istifadə edirik
    await waitFor(() => expect(mockOnLogin).toHaveBeenCalledTimes(1), {
      timeout: 1500,
    });
  });

  test("does not call onLogin when inputs are empty", async () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(mockOnLogin).not.toHaveBeenCalled(), {
      timeout: 1500,
    });
  });
});
