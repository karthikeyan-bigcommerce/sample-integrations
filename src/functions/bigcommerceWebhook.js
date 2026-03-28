const { app } = require("@azure/functions");

app.http("bigcommerceWebhookApi", {
  methods: ["POST"],
  authLevel: "function",
  route: "bigcommerce/webhook",
  handler: async (request, context) => {
    try {
      const body = await request.json();

      context.log("BigCommerce webhook received");
      context.log("Payload:", body);

      // 🔥 Call Trigger.dev via API
      await fetch("https://api.trigger.dev/api/v1/events", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.TRIGGER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "bigcommerce-order",
          payload: body
        })
      });

      return {
        status: 200,
        jsonBody: { success: true }
      };

    } catch (error) {
      context.log("Error:", error);

      return {
        status: 500,
        jsonBody: { error: "Webhook failed" }
      };
    }
  }
});