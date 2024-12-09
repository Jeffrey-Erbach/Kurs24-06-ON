const { findItemIndex } = require('./Wald'); // Importiere die Funktion aus Wald.js
const express = require('express');
const request = require('supertest');
const { router } = require('./Wald');

// Express-App mit dem Wald-Router erstellen
const app = express();
app.use(express.json());
app.use('/wald', router);

describe("findItemIndex", () => {
  it("should return the correct index of an existing item", () => {
    const inventory = [
      { name: "Fichtenholz", quantity: 10 },
      { name: "Rinde", quantity: 5 },
    ];
    const result = findItemIndex.call({ inventoryItems: inventory }, "Rinde");
    expect(result).toBe(1);
  });

  it("should return -1 if the item does not exist", () => {
    const inventory = [
      { name: "Fichtenholz", quantity: 10 },
      { name: "Rinde", quantity: 5 },
    ];
    const result = findItemIndex.call({ inventoryItems: inventory }, "Zapfen");
    expect(result).toBe(-1);
  });
});

jest.useFakeTimers();

describe("POST /wald/gather", () => {
  it("should allow gathering resources up to the limit before cooldown", async () => {
    for (let i = 0; i < 3; i++) {
      const res = await request(app).post('/wald/gather');
      expect(res.status).toBe(201);
      expect(res.body.cooldown).toBe(false);
    }
  });

  it("should activate cooldown after the limit", async () => {
    const res = await request(app).post('/wald/gather');
    expect(res.status).toBe(429);
    expect(res.body.cooldown).toBe(true);
  });

  it("should reset cooldown after cooldown period", async () => {
    jest.advanceTimersByTime(5 * 60 * 1000);

    const res = await request(app).post('/wald/gather');
    expect(res.status).toBe(201);
    expect(res.body.cooldown).toBe(false);
  });
});
