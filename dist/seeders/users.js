"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const uuid_1 = require("uuid");
exports.users = [
    {
        _id: (0, uuid_1.v4)(),
        userName: "first",
        password: "1234",
        email: "first@gmail.com",
        isAdmin: true,
    },
    {
        _id: (0, uuid_1.v4)(),
        userName: "second",
        password: "1234",
        email: "second@gmail.com",
        isAdmin: false,
    },
];
//# sourceMappingURL=users.js.map