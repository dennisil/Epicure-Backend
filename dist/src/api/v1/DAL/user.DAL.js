"use strict";
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
    async read(docId) {
        try {
            // let doc: any = await db.user.findOne({ where: { _id: docId } });
            const id = new mongodb_1.ObjectId(docId);
            let doc = await super.read(id);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async query(queryParams) {
        try {
            let doc = await super.query(queryParams);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async delete(id) {
        try {
            let doc = await models_1.default.user.destroy({ where: { _id: id } });
            //   console.log("Inside Dal DOC:", doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async create(user) {
        try {
            // let doc: any = await super.create(user);
            let doc = await super.create(user);
            console.log("user", doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async update(rawData) {
        console.log("rawData", rawData);
        const doc = await super.update(rawData);
        return doc;
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
//# sourceMappingURL=user.DAL.js.map