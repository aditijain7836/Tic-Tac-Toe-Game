import { render } from "@testing-library/react";
import App from "./App";

describe("tic-tac-toe game being rendered", () => {
  test("renders the status", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("status").length).toBe(1);
  });

  test("renders the board rows", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("board-row").length).toBe(3);
  });
});
