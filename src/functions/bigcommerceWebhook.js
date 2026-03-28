import { tasks } from "@trigger.dev/sdk/v3";

export async function bigcommerceWebhook(request, context) {
  try {
    const body = await request.json();

    context.log(" BigCommerce webhook received");
    context.log("Payload:", body);

    // 👉 Trigger Trigger.dev task
    await tasks.trigger("bigcommerce-webhook", body);

    context.log(" Sent to Trigger.dev");

    return {
      status: 200,
      jsonBody: { success: true },
    };
  } catch (error) {
    context.log(" Error:", error);

    return {
      status: 500,
      jsonBody: { error: "Webhook processing failed" },
    };
  }
}