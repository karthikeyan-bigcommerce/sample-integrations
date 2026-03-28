const { app } = require('@azure/functions');

// Import modular handlers
const creditLimit = require('./src/functions/creditLimit');
const stock = require('./src/functions/stock');
import { bigcommerceWebhook } from "./src/functions/bigcommerceWebhook.js";


// Register APIs
app.http('creditLimitApi', {
    methods: ['GET', 'POST'],
    authLevel: 'function',
    route: 'credit-limit',
    handler: creditLimit
});

app.http('stockApi', {
    methods: ['GET', 'POST'],
    authLevel: 'function',
    route: 'stock',
    handler: stock
});

app.http('bigcommerceWebhookAPI', {
  methods: ['POST'],
  authLevel: 'function',
  route: 'bigcommerce/webhook',
  handler: bigcommerceWebhook
});