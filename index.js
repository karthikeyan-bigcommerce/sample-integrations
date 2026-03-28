const { app } = require("@azure/functions");

require("./src/functions/stock");
require("./src/functions/creditLimit");
require("./src/functions/bigcommerceWebhook");