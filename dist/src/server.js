"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv").config();
// const appsql = new Appsql(process.env.PORT);
// appsql.listen();
// mongo server
const app = new app_1.default(process.env.PORT);
app.listen();
// app.createItems()
//# sourceMappingURL=server.js.map