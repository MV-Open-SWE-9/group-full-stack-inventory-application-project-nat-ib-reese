const request = require("supertest");
const app = require("./app");
const seed = require("./seed");
const { Item } = require("./models/index");

let itemQuantity;

// // clear db before tests
beforeAll(async () => {
  await seed();
  const items = await Item.findAll({});
  itemQuantity = items.length;
});

describe("/items tests", () => {
  test("GET /items", async () => {
    const response = await request(app).get("/items");
    expect(response.body).toContainEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });

  test("GET /items/:id", async () => {
    const response = await request(app).get("/items/1");
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
      })
    );
  });
});
