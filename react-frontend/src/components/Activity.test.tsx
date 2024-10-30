import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { ACTIVITY_MOCK } from "../services/__mocks__/activity";
import * as service from "../services/activity";
import Activities from "./Activity";

describe("Activities", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders fetched activities", async () => {
    vi.spyOn(service, "fetchActivities").mockResolvedValueOnce(ACTIVITY_MOCK);

    const { getByText } = render(<Activities />);
    await waitFor(() => {
      expect(getByText(/City Tour/i)).toBeInTheDocument();
      expect(getByText(/Museum Ticket/i)).toBeInTheDocument();
      expect(getByText(/Nature Tour/i)).toBeInTheDocument();
    });
  });

  it("renders warning message when activities are not found", async () => {
    vi.spyOn(service, "fetchActivities").mockResolvedValueOnce([]);

    const { getByText } = render(<Activities />);
    await waitFor(() => {
      expect(getByText(/No activities found/i)).toBeInTheDocument();
    });
  });

  it("renders error message when fetching fails", async () => {
    vi.spyOn(service, "fetchActivities").mockRejectedValueOnce(
      new Error("Internal Mock Error")
    );

    const { getByText } = render(<Activities />);
    await waitFor(() => {
      expect(getByText(/Error while fetching activities/i)).toBeInTheDocument();
      expect(getByText(/Internal Mock Error/i)).toBeInTheDocument();
    });
  });
});
