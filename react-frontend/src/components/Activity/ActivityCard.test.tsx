import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ACTIVITY_MOCK } from "../../services/__mocks__/activity";
import ActivityCard from "./ActivityCard";

vi.mock("../Supplier/SupplierAddress", () => ({
  default: () => <>SupplierAddressMock</>,
}));

describe("ActivityCard Component", () => {
  it("renders the title", () => {
    const { getByRole } = render(<ActivityCard activity={ACTIVITY_MOCK[0]} />);
    expect(getByRole("strong")).toHaveTextContent("City Tour");
  });

  it("renders the price and currency", () => {
    const { getByLabelText } = render(
      <ActivityCard activity={ACTIVITY_MOCK[0]} />
    );
    expect(getByLabelText("Price")).toHaveTextContent("$100");
  });

  it("renders the special offer icon when applicable", () => {
    const { getByRole } = render(<ActivityCard activity={ACTIVITY_MOCK[1]} />);
    expect(getByRole("complementary")).toHaveTextContent(/Special Offer/);
  });

  it("does not render the special offer icon when not applicable", () => {
    const { queryByRole } = render(
      <ActivityCard activity={ACTIVITY_MOCK[0]} />
    );
    expect(queryByRole("complementary")).not.toBeInTheDocument();
  });

  it("renders the rating followed by the respective stars", () => {
    const { getByLabelText } = render(
      <ActivityCard activity={ACTIVITY_MOCK[1]} />
    );
    expect(getByLabelText("Rating")).toHaveTextContent("⭐⭐⭐⭐");
    expect(getByLabelText("Rating")).toHaveTextContent("4.5");
  });

  it("renders the rating without any stars", () => {
    const { getByLabelText } = render(
      <ActivityCard
        activity={{
          ...ACTIVITY_MOCK[0],
          rating: 0.999,
        }}
      />
    );
    expect(getByLabelText("Rating")).not.toHaveTextContent(/⭐/);
    expect(getByLabelText("Rating")).toHaveTextContent("0.999");
  });

  it("renders the SupplierAddress component if the supplier is set", () => {
    const { getByText } = render(<ActivityCard activity={ACTIVITY_MOCK[0]} />);
    expect(getByText("SupplierAddressMock")).toBeInTheDocument();
  });

  it("does not render the SupplierAddress component if supplier is undefined", () => {
    const { queryByText } = render(
      <ActivityCard
        activity={{
          ...ACTIVITY_MOCK[0],
          supplier: undefined,
        }}
      />
    );
    expect(queryByText("SupplierAddressMock")).not.toBeInTheDocument();
  });
});
