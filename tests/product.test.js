// describe("sample test", () => {
//   it("adds 2 numbers", () => {
//     expect(1 - 1).toBe(0);
//     // api call- getAll---> product data
//   });
// });

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

// describe("Running GET API- /api/getOne", () => {
//   it("it should return all products", async () => {
//     const res = await request(app).get("/api/getOne/6376fc1ecc0a979f28cffe00");
//     expect(res.statusCode).toBe(200);
//     expect(res.body.data.name).toBe("Cooler");
//     expect(res.body.data.age).toBe(10);
//   });
// });

// delete
// describe("Running DELETE API- /api/delete/:id", () => {
//   it("it should delete one product", async () => {
//     const res = await request(app).delete(
//       "/api/delete/637b01b61f393805b4d0e364"
//     );
//     expect(res.statusCode).toBe(200);
//   });
// });

// update
describe("get api -/update", () => {
  it("It should update one ", async () => {
    const res = await request(app)
      .put(`/api/update/6376fc1ecc0a979f28cffe00`)
      .send({
        name: "AC",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.savedData.name).toBe("AC");
  });
});

afterEach(async () => {
  await mongoose.connection.close();
});
