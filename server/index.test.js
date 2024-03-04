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
    const response = await request(app).get("/api/items");
    expect(response.body).toContainEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });

  test("GET /items/:id", async () => {
    const response = await request(app).get("/api/items/1");
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
      })
    );
  });

  test("should delete the item with the given id", async () => {
    await request(app).delete("/api/items/1");
    const deletedItem = await Item.findByPk(1);
    expect(deletedItem).toBeNull();
  });


  test("PUT /items/:id", async () => {
   
    return await request(app).put("/api/items/2")
    .send({
      name: "Cellphone",
      price:1300,
      description:"this is an apple iphone",
      category: "electronics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK7HCOaiG0un0K9msFAOz6rSnIMgVnovEdQ&usqp=CAU"
    })
    expect(res.body).toEqual(
      expect.objectContaining({
        name: "Cellphone",
        price: 1300,
      })
    );
  });
});
