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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDAL = void 0;
const AbsDAL_1 = require("./Base/AbsDAL");
const mongodb_1 = require("mongodb");
const restaurant_model_1 = require("../../../db/models/restaurant/restaurant.model");
const ErrorMsgs_1 = require("../entities/Errors/ErrorMsgs");
class RestaurantDAL extends AbsDAL_1.AbsDAL {
    getCollectionName() {
        return RestaurantDAL.RESTAURANT_COLLECTION;
    }
    getModel() {
        return restaurant_model_1.RestaurantModel;
    }
    getModelInstance(rawData) {
        const doc = new restaurant_model_1.RestaurantModel(rawData);
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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = new mongodb_1.ObjectId(docId);
                const restaurant = yield restaurant_model_1.RestaurantModel.findById(id).populate({
                    path: "dishes",
                });
                // const restaurant = await db.restaurant.findOne({
                //   include: db.dish,
                //   where: { _id: docId },
                // });
                console.log("restaurant", restaurant);
                return restaurant;
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
                // let { txtCriteria, limit,offset } = queryParams || "";
                // if (!txtCriteria.length) txtCriteria = ""
                // console.log("queryParams", queryParams);
                // let doc: any = await db.restaurant.findAll({
                //   where: txtCriteria,
                //   offset,
                //   limit,
                // });
                let doc = yield _super.query.call(this, queryParams);
                //   console.log("Inside Dal DOC:", doc);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
                throw new Error(error.message);
            }
        });
    }
    create(res) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // let doc: any = await db.restaurant.create(res);
                let doc = yield _super.create.call(this, res);
                //   console.log("Inside Dal DOC:", doc);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
                throw new Error(error.message);
            }
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("id", id);
                // let doc: any = await db.restaurant.destroy({ where: { _id: id } });
                let doc = yield _super.delete.call(this, id);
                //   console.log("Inside Dal DOC:", doc);
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
            // const doc: any = await db.restaurant.update(rawData, {
            //   where: { _id: rawData._id },
            // });
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
exports.RestaurantDAL = RestaurantDAL;
RestaurantDAL.RESTAURANT_COLLECTION = "restaurant";
