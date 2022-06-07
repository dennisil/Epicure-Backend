"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefModel = void 0;
const mongoose_1 = require("mongoose");
// import {
//   BoundTo,
//   Mesh,
//   StrongSchema,
//   createStrongSchema,
// } from "../../../utils/ts-coverage";
const genericFunctions_1 = require("../../../generics/genericFunctions");
const chefSchema = new mongoose_1.Schema({
    restaurants: {
        type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "restaurant" }],
        required: true,
    },
    chef: {
        type: String,
        unique: true,
        required: true,
    },
}, { collection: "chef" });
chefSchema.set("toJSON", {
    transform: function (doc, ret, option) {
        return (0, genericFunctions_1.cleanObject)(ret);
    },
});
exports.ChefModel = (0, mongoose_1.model)("chef", chefSchema);
