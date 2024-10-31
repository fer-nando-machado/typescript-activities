import "@testing-library/react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ActivityFilter from "./ActivityFilter";

describe("ActivityFilter Component", () => {
  it("renders the input fields and search button", () => {
    const { getByPlaceholderText, getByRole, getByLabelText } = render(
      <ActivityFilter callback={vi.fn()} />
    );

    expect(getByLabelText("Activity Title")).toBeInTheDocument();
    expect(getByPlaceholderText(/.../)).toBeInTheDocument();
    expect(getByRole("button", { name: "Search!" })).toBeInTheDocument();
  });

  it("updates the title state on input change", () => {
    const { getByLabelText } = render(<ActivityFilter callback={vi.fn()} />);

    const inputTitle = getByLabelText("Activity Title");
    fireEvent.change(inputTitle, { target: { value: "Kung Fu Fighting" } });
    expect(inputTitle).toHaveValue("Kung Fu Fighting");
  });

  it("calls the callback function on form submit", () => {
    const mockCallback = vi.fn();
    const { getByLabelText } = render(
      <ActivityFilter callback={mockCallback} />
    );
    const inputTitle = getByLabelText("Activity Title");
    fireEvent.change(inputTitle, { target: { value: "Deep Sea Skiving" } });

    const form = getByLabelText("Activity Filter");
    fireEvent.submit(form);
    expect(mockCallback).toHaveBeenCalledWith({ title: "Deep Sea Skiving" });
  });

  it("calls the callback function on search button press", () => {
    const mockCallback = vi.fn();
    const { getByLabelText, getByRole } = render(
      <ActivityFilter callback={mockCallback} />
    );
    const inputTitle = getByLabelText("Activity Title");
    fireEvent.change(inputTitle, { target: { value: "Nightclubbing" } });

    const searchButton = getByRole("button", { name: "Search!" });
    fireEvent.click(searchButton);
    expect(mockCallback).toHaveBeenCalledWith({ title: "Nightclubbing" });
  });
});
