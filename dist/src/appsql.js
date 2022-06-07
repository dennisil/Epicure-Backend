"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/routes"));
// import "./db/mongoose-init";
const models_1 = __importDefault(require("../models"));
const helmet_1 = __importDefault(require("helmet"));
// import config from "config";
// import expressValidator from "express-validator";
// let testres:any = fs.readFileSync("./restaurant.json");
// console.log("testres", JSON.parse(testres));
// testres = JSON.parse(testres)
class Appsql {
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
    createItems() {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //   testres.map(async (c: any) => {
            //     await db.testres.create(c);
            //     console.log(c);
            //   });
            // } catch (err) {
            //   console.log(err);
            // }
        });
    }
    listen() {
        // for sequelize
        models_1.default.sequelize.sync().then(() => {
            this.app.listen(this.port, () => {
                console.log(`App listening on the port ${this.port}`);
            });
        });
        // this.app.listen(this.port, () => {
        //   console.log(`App listening on the port ${this.port}`);
        // });
    }
}
exports.default = Appsql;
