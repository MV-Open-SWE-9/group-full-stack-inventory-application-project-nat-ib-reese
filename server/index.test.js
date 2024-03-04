const request = require("supertest");
const app = require("./app");
const seed = require("./seed");

// // clear db before tests
beforeAll(async () => {
  await seed();
});

describe("/items tests", () => {});
