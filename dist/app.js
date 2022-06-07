"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/routes"));
// import db from "../models";
const helmet_1 = __importDefault(require("helmet"));
require("./db/mongoose-init");
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.initAppUsage();
    }
    initAppUsage() {
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    initializeMiddlewares() {
        // const allowedOrigins: any = config.get("Security.AllowedOrigins");
        this.app.use(body_parser_1.default.json());
        if (process.env.NODE_ENV == "production") {
            this.app.use((0, helmet_1.default)());
        }
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)({ credentials: true }));
        this.app.use(function (req, res, next) {
            if (process.env.NODE_ENV !== "production") {
                res.header("Access-Control-Allow-Origin", "*");
            }
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    initializeRoutes() {
        const apiRoutes = new routes_1.default();
        this.app.use("/api/", apiRoutes.router);
    }
    async createItems() {
        // try {
        //   testres.map(async (c: any) => {
        //     await db.testres.create(c);
        //     console.log(c);
        //   });
        // } catch (err) {
        //   console.log(err);
        // }
    }
    listen() {
        // for sequelize
        // db.sequelize.sync({ alter: { drop: false } }).then(() => {
        //   this.app.listen(this.port, () => {
        //     console.log(`App listening on the port ${this.port}`);
        //   });
        // });
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map