module.exports = async (request, context) => {
    context.log("Stock API triggered");

    return {
        status: 200,
        jsonBody: {
            message: "Stock API working",
            sku: request.query.get("sku") || "default",
            stock: 100
        }
    };
};