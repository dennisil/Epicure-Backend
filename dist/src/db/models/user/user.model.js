"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
// import {
//   BoundTo,
//   Mesh,
//   StrongSchema,
//   createStrongSchema,
// } from "../../../utils/ts-coverage";
const genericFunctions_1 = require("../../../generics/genericFunctions");
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        validate: [validateEmail, "Please fill a valid email address"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { collection: "user" });
userSchema.set("toJSON", {
    transform: function (doc, ret, option) {
        return (0, genericFunctions_1.cleanObject)(ret);
    },
});
exports.UserModel = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.model.js.map