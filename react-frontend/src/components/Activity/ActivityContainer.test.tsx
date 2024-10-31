import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { ACTIVITY_MOCK } from "../../services/__mocks__/activity";
import * as service from "../../services/activity";
import ActivityContainer from "./ActivityContainer";

describe("ActivityContainer Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders fetched activities", async () => {
    vi.spyOn(service, "fetchActivities").mockResolvedValueOnce(ACTIVITY_MOCK);

    const { getByText } = render(<ActivityContainer />);
    await waitFor(() => {
      expect(getByText(/City Tour/)).toBeInTheDocument();
      expect(getByText(/Museum Ticket/)).toBeInTheDocument();
      expect(getByText(/Nature Tour/)).toBeInTheDocument();
    });
  });

  it("renders loading message while fetching", async () => {
    const { getByText } = render(<ActivityContainer />);
    expect(getByText(/Looking for activities/)).toBeInTheDocument();
  });

  it("renders warning message when activities are not found", async () => {
    vi.spyOn(service, "fetchActivities").mockResolvedValueOnce([]);

    const { getByText } = render(<ActivityContainer />);
    await waitFor(() => {
      expect(getByText(/No activities found/)).toBeInTheDocument();
    });
  });

  it("renders error message when fetching fails", async () => {
    vi.spyOn(service, "fetchActivities").mockRejectedValueOnce(new Error());

    const { getByText } = render(<ActivityContainer />);
    await waitFor(() => {
      expect(getByText(/We had a problem while looking/)).toBeInTheDocument();
    });
  });
});
