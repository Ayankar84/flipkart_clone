const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {type: "String", required: "true"},
        username: {type: "String", required: "true"},
        email: "String",
        password: {type: "String", required: "true"},
        mobile: {type: "String", required: "true"},
        productIds: {
            cart: [],
            wishlist: [],
            orderd: []
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;