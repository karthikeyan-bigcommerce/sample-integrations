const { app } = require("@azure/functions");

app.http("creditLimitApi", {
  methods: ["GET", "POST"],
  authLevel: "function",
  route: "credit-limit",
  handler: async (request, context) => {
    context.log("Credit Limit API triggered");

    return {
      status: 200,
      jsonBody: {
        message: "Credit Limit API working",
        customerId: request.query.get("customerId") || "default",
        creditLimit: 5000,
        available: 3200
      }
    };
  }
});