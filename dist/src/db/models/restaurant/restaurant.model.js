"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = void 0;
const mongoose_1 = require("mongoose");
const genericFunctions_1 = require("../../../generics/genericFunctions");
const restaurantSchema = new mongoose_1.Schema({
    resName: {
        type: String,
        unique: true,
        required: true,
    },
    chef: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
        default: "/imgs/dishes/lumina.jpg",
    },
    tags: {
        type: [String],
        required: true,
    },
    dishes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "dish" }],
}, { collection: "restaurant" });
restaurantSchema.set("toJSON", {
    transform: function (doc, ret, option) {
        return (0, genericFunctions_1.cleanObject)(ret);
    },
});
exports.RestaurantModel = (0, mongoose_1.model)("restaurant", restaurantSchema);
