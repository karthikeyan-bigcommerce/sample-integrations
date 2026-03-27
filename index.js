import { app } from "@azure/functions";

console.log("Functions loaded");

// STOCK API
app.http("creditLimitApi", {
  methods: ["POST"],
  authLevel: "function",
  route: "credit-limit",
  handler: async (request, context) => {

    const body = await request.json();

    return {
      status: 200,
      jsonBody: {
        customerIds: body.productCodes,
        creditLimit: 5000,
        available: 3200
      }
    };
  }
});

// CREDIT LIMIT API
app.http("creditLimitApi", {
  methods: ["POST"],
  authLevel: "function",
  route: "credit-limit",
  handler: async (request, context) => {

    const body = await request.json();

    return {
      status: 200,
      jsonBody: {
        customerIds: body.productCodes,
        creditLimit: 5000,
        available: 3200
      }
    };
  }
});