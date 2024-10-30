import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchActivities } from "./activity";
import { API_URL, GET_JSON } from "../config";
import { ACTIVITY_MOCK } from "./__mocks__/activity";

describe("fetchActivities", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches all activities with no filters", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => ACTIVITY_MOCK,
      ok: true,
    });

    const activities = await fetchActivities();
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/activities?`, GET_JSON);
    expect(activities).toEqual(ACTIVITY_MOCK);
  });

  it("fetches activities filtered by title", async () => {
    const filter = { title: "City Tour" };
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => ACTIVITY_MOCK[0],
      ok: true,
    });

    const activities = await fetchActivities(filter);
    expect(fetch).toHaveBeenCalledWith(
      `${API_URL}/activities?title=City+Tour`,
      GET_JSON
    );
    expect(activities).toEqual(ACTIVITY_MOCK[0]);
  });

  it("throws an error if the response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => "Internal Mock Error",
      ok: false,
    });

    await expect(fetchActivities()).rejects.toThrow(
      "Error fetching activities: Internal Mock Error"
    );
  });
});
