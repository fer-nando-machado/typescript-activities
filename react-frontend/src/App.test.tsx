import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

vi.mock("./components/Activity");

describe("App", () => {
  it("renders default App home", async () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
