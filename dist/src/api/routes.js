"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const v1_routes_1 = __importDefault(require("./v1/v1.routes"));
const express_2 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        const v1Routes = new v1_routes_1.default();
        this.router.use("/v1/", v1Routes.router);
        if (process.env.NODE_ENV != "production") {
            this.router.use("/docs/", express_2.default.static(path_1.default.resolve(__dirname, "../../webApidoc")));
        }
    }
}
exports.default = ApiRoutes;
