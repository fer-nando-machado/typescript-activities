import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders default App home", async () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
