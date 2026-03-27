const { app } = require('@azure/functions');

// Import modular handlers
const creditLimit = require('./src/functions/creditLimit');
const stock = require('./src/functions/stock');

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