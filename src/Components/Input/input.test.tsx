import { render, fireEvent } from "@testing-library/react";
import InputComponent from "../../../../teste-t10/src/Components/Input/input";
import "@testing-library/jest-dom";

describe("Input component", () => {
  it("Should display the component input", () => {
    const { container } = render(<InputComponent className="chakra-input" />);
    const inputTest = container.getByRole("input");
    expect(inputTest).toHaveAttribute("class", "input");
  });
});
