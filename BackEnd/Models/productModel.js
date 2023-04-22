const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        id: { type: 'String', unique: true },
        url: { type: 'String', required: true },
        detailUrl: { type: 'String', required: true },
        title: {
            shortTitle: { type: 'String', required: true },
            longTitle: { type: 'String', required: true }
        },
        price: {
            mrp: { type: 'Number', required: true },
            cost: { type: 'Number', required: true },
            discount: 'String'
        },
        quantity: 'Number',
        description: 'String',
        discount: 'String',
        tagline: 'String'
    },
    {
        versionKey: false
    }
)

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;