import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InputComponent from "./input";
import "@testing-library/jest-dom";

describe("Input component", () => {
  const setup = () => {
    const utils = render(<InputComponent placeholder="Search" />);
    const input = screen.getByPlaceholderText("Search");
    return {
      input,
      ...utils,
    };
  };

  it("Should display the component input", () => {
    expect(setup().input).toBeVisible();
  });
});
