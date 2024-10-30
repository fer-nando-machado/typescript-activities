import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import Activity from "./Activity";

describe("Activity", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders activities", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          title: "City Tour",
          price: 100,
          currency: "$",
          rating: 4,
          specialOffer: false,
          supplierId: 100,
        },
        {
          id: 2,
          title: "Museum Ticket",
          price: 20,
          currency: "¥",
          rating: 4.5,
          specialOffer: true,
          supplierId: 200,
        },
        {
          id: 3,
          title: "Nature Tour",
          price: 150,
          currency: "€",
          rating: 5,
          specialOffer: true,
          supplierId: 100,
        },
      ],
    });

    const { getByText } = render(<Activity />);

    await waitFor(() => {
      expect(getByText(/City Tour/i)).toBeInTheDocument();
      expect(getByText(/Museum Ticket/i)).toBeInTheDocument();
      expect(getByText(/Nature Tour/i)).toBeInTheDocument();
    });
  });

  it("renders warning message when no activities are found", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => [],
    });

    const { getByText } = render(<Activity />);

    await waitFor(() => {
      expect(getByText(/No activities found/i)).toBeInTheDocument();
    });
  });
});
