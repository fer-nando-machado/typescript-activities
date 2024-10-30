import { getActivities } from "../core/activity";
import { fetchActivities } from "../data/activity";
import { fetchSuppliers } from "../data/supplier";
import { ActivityDetail } from "../../../types/activity";

jest.mock("../data/activity");
jest.mock("../data/supplier");

describe("getActivities", () => {
  it("should return all activities with details", () => {
    const activities = getActivities();

    expect(activities.length).toEqual(3);
    expect(activities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          supplier: expect.objectContaining({ id: 100 }),
        }),
        expect.objectContaining({
          id: 2,
          supplier: expect.objectContaining({ id: 200 }),
        }),
        expect.objectContaining({
          id: 3,
          supplier: expect.objectContaining({ id: 100 }),
        }),
      ])
    );
  });

  it("should return filtered activities by matching title", async () => {
    const activities = getActivities({ title: "Tour" });

    expect(activities.length).toEqual(2);
    expect(activities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 3 }),
      ])
    );
  });

  it("should return empty activities if nothing matches title", () => {
    const activities = getActivities({ title: "Horses" });

    expect(activities.length).toEqual(0);
    expect(activities).toEqual([]);
  });
});
