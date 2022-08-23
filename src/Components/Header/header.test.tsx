import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./index";
import "@testing-library/jest-dom";

describe("Header component", () => {
  const { container } = render(<Header />);

  it("Should display the component Header", () => {
    expect(container).toBeVisible();
  });
});