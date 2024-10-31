import "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ACTIVITY_MOCK } from "../services/__mocks__/activity";
import Supplier from "./Supplier";

describe("Supplier Component", () => {
  it("renders the supplier name and address", () => {
    const supplier = ACTIVITY_MOCK[0].supplier;
    const { getByText } = render(<Supplier supplier={supplier} />);
    expect(getByText(/Jackie Chan/)).toBeInTheDocument();
    expect(getByText(/from Hong Kong, China, 10000/)).toBeInTheDocument();
  });
});
