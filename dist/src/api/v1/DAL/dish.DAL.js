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
exports.DishDAL = void 0;
const AbsDAL_1 = require("./Base/AbsDAL");
const mongodb_1 = require("mongodb");
const dish_model_1 = require("../../../db/models/dish/dish.model");
const ErrorMsgs_1 = require("../entities/Errors/ErrorMsgs");
class DishDAL extends AbsDAL_1.AbsDAL {
    getCollectionName() {
        return DishDAL.Dish_COLLECTION;
    }
    getModel() {
        return dish_model_1.DishModel;
    }
    getModelInstance(rawData) {
        const doc = new dish_model_1.DishModel(rawData);
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
                // let doc: any = await db.dish.findOne({ where: { _id: docId } });
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
                // let doc: any = await db.dish.findAll(queryParams);
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
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // let doc: any = await db.dish.destroy({ where: { _id: id } });
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
    create(dish) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //   if (dish.resId) dish.resId = new ObjectId(dish.resId);
                // let doc: any = await db.dish.create(dish);
                let doc = yield _super.create.call(this, dish);
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
            // const filter = { _id: rawData._id };
            console.log("rawData", rawData);
            // const doc: any = await db.dish.update(rawData, {
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
exports.DishDAL = DishDAL;
DishDAL.Dish_COLLECTION = "dish";
