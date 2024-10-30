import request from "supertest";
import express from "express";
import activityRouter from "./activity";

const app = express();
app.use(express.json());
app.use("/", activityRouter);

jest.mock("../data/activity");
jest.mock("../data/supplier");

describe("GET /activities", () => {
  it("should return all activities", async () => {
    const response = await request(app).get("/activities").expect(200);

    expect(response.body.length).toEqual(3);
    expect(response.body).toEqual(
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
    const response = await request(app)
      .get("/activities")
      .query({ title: "Tour" })
      .expect(200);

    expect(response.body.length).toEqual(2);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 3 }),
      ])
    );
  });

  it("should return empty activities if nothing matches title", async () => {
    const response = await request(app)
      .get("/activities")
      .query({ title: "Horses" })
      .expect(200);

    expect(response.body.length).toEqual(0);
    expect(response.body).toEqual([]);
  });

  it("should return error 500 if an error happens", async () => {
    const { fetchActivities } = require("../data/activity");
    fetchActivities.mockImplementationOnce(() => {
      throw new Error("Internal database error.");
    });

    const response = await request(app).get("/activities").expect(500);
    expect(response.body).toEqual("Internal database error.");
  });
});
