import request from "supertest";
import express from "express";
import activityRouter from "./activity";

const app = express();
app.use(express.json());
app.use("/", activityRouter);

jest.mock("../data/activity", () => ({
  fetchActivities: jest.fn(() => [
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
  ]),
}));

jest.mock("../data/supplier", () => ({
  fetchSuppliers: jest.fn(() => [
    {
      id: 100,
      name: "Jackie Chan",
      address: "789 Main St",
      zip: "10000",
      city: "Hong Kong",
      country: "China",
    },
    {
      id: 200,
      name: "Bruce Lee",
      address: "123 Long Rd",
      zip: "20000",
      city: "San Francisco",
      country: "USA",
    },
  ]),
}));

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
        expect.objectContaining({ id: 2 }),
        expect.objectContaining({ id: 3 }),
      ])
    );
  });

  it("should return filtered activities if matches title", async () => {
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

  it("should return empty activities if unmatches title", async () => {
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
    expect(response.body).toEqual({ error: "Internal database error." });
  });
});
