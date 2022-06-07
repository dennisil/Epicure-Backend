"use strict";
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
    async read(docId) {
        try {
            // let doc: any = await db.dish.findOne({ where: { _id: docId } });
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
            // let doc: any = await db.dish.findAll(queryParams);
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
            // let doc: any = await db.dish.destroy({ where: { _id: id } });
            let doc = await super.delete(id);
            //   console.log("Inside Dal DOC:", doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async create(dish) {
        try {
            //   if (dish.resId) dish.resId = new ObjectId(dish.resId);
            // let doc: any = await db.dish.create(dish);
            let doc = await super.create(dish);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async update(rawData) {
        // const filter = { _id: rawData._id };
        console.log("rawData", rawData);
        // const doc: any = await db.dish.update(rawData, {
        //   where: { _id: rawData._id },
        // });
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
exports.DishDAL = DishDAL;
DishDAL.Dish_COLLECTION = "dish";
//# sourceMappingURL=dish.DAL.js.map