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
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = __importDefault(require("../../models"));
const uuid_1 = require("uuid");
const dbURI = "mongodb+srv://dennis:12345@dennis-epicure.vr0ae.mongodb.net/epicure?retryWrites=true&w=majority";
mongoose_1.default
    .connect(dbURI)
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log(err));
let mongoDb = mongoose_1.default.connection;
mongoDb.once("open", () => __awaiter(void 0, void 0, void 0, function* () {
    // pushFromMongoToSql(mongoDb);
}));
function pushFromMongoToSql(mongoDb) {
    return __awaiter(this, void 0, void 0, function* () {
        mongoDb.collections;
        let collections = mongoDb.collections;
        for (const i in collections) {
            let res = collections[i].find({});
            try {
                let collecion = yield res.toArray();
                collecion.forEach((doc) => __awaiter(this, void 0, void 0, function* () {
                    doc._id = (0, uuid_1.v4)();
                    if (doc.__v)
                        delete doc.__v;
                    yield models_1.default[i].create(doc);
                }));
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}
