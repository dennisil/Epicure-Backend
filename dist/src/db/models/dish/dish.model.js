"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModel = void 0;
const mongoose_1 = require("mongoose");
// import {
//   BoundTo,
//   Mesh,
//   StrongSchema,
//   createStrongSchema,
// } from "../../../utils/ts-coverage";
const genericFunctions_1 = require("../../../generics/genericFunctions");
const dishSchema = new mongoose_1.Schema({
    resId: { type: mongoose_1.Schema.Types.ObjectId, ref: "restaurant" },
    resName: {
        type: String,
        required: true,
    },
    chef: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    dishName: {
        unique: true,
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    special: {
        type: [String],
    },
}, { collection: "dish" });
// const SchoolSchema = createStrongSchema(({
//     _id: { type: String },
//     principle: { type:String },
//     principle_name: { type: String }
// } as StrongSchema<IDish>), new SchoolMethods(), { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
dishSchema.set("toJSON", {
    transform: function (doc, ret, option) {
        return (0, genericFunctions_1.cleanObject)(ret);
    },
});
exports.DishModel = (0, mongoose_1.model)("dish", dishSchema);
//# sourceMappingURL=dish.model.js.map