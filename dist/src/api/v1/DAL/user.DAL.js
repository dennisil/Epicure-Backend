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
exports.UserDAL = void 0;
const AbsDAL_1 = require("./Base/AbsDAL");
const mongodb_1 = require("mongodb");
const ErrorMsgs_1 = require("../entities/Errors/ErrorMsgs");
const user_model_1 = require("../../../db/models/user/user.model");
const models_1 = __importDefault(require("../../../../models"));
class UserDAL extends AbsDAL_1.AbsDAL {
    getCollectionName() {
        return UserDAL.Dish_COLLECTION;
    }
    getModel() {
        return user_model_1.UserModel;
    }
    getModelInstance(rawData) {
        const doc = new user_model_1.UserModel(rawData);
        return doc;
    }
    /**
     * read
     * read single document
     * @param {any} docId document id
     *
     * @returns {Promise<any>}
     */
    read(docId) {
        const _super = Object.create(null, {
            read: { get: () => super.read }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // let doc: any = await db.user.findOne({ where: { _id: docId } });
                const id = new mongodb_1.ObjectId(docId);
                let doc = yield _super.read.call(this, id);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
                throw new Error(error.message);
            }
        });
    }
    query(queryParams) {
        const _super = Object.create(null, {
            query: { get: () => super.query }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let doc = yield _super.query.call(this, queryParams);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
                throw new Error(error.message);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let doc = yield models_1.default.user.destroy({ where: { _id: id } });
                //   console.log("Inside Dal DOC:", doc);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
                throw new Error(error.message);
            }
        });
    }
    create(user) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // let doc: any = await super.create(user);
                let doc = yield _super.create.call(this, user);
                console.log("user", doc);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
                throw new Error(error.message);
            }
        });
    }
    update(rawData) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("rawData", rawData);
            const doc = yield _super.update.call(this, rawData);
            return doc;
        });
    }
    getQueryFilters(filters) {
        // let queryFilters = {};
        // queryFilters[`city`] = filters.cities && filters.cities.length > 0 ? filters.cities : null;;
        // queryFilters[`type`] = filters.schoolTypes && filters.schoolTypes.length > 0 ? filters.schoolTypes : null;
        // queryFilters = _.pickBy(queryFilters, _.identity);
        // return queryFilters;
    }
}
exports.UserDAL = UserDAL;
UserDAL.Dish_COLLECTION = "user";
