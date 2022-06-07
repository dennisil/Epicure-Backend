"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDAL = void 0;
const AbsDAL_1 = require("./Base/AbsDAL");
const mongodb_1 = require("mongodb");
const restaurant_model_1 = require("../../../db/models/restaurant/restaurant.model");
const ErrorMsgs_1 = require("../entities/Errors/ErrorMsgs");
// sequlize
// import db from "../../../../models";
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
    async read(docId) {
        try {
            const id = new mongodb_1.ObjectId(docId);
            const restaurant = await restaurant_model_1.RestaurantModel.findById(id).populate({
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
    }
    async query(queryParams) {
        try {
            // let { txtCriteria, limit,offset } = queryParams || "";
            // if (!txtCriteria.length) txtCriteria = ""
            // console.log("queryParams", queryParams);
            // let doc: any = await db.restaurant.findAll({
            //   where: txtCriteria,
            //   offset,
            //   limit,
            // });
            let doc = await super.query(queryParams);
            //   console.log("Inside Dal DOC:", doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async create(res) {
        try {
            // let doc: any = await db.restaurant.create(res);
            let doc = await super.create(res);
            //   console.log("Inside Dal DOC:", doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async delete(id) {
        try {
            console.log("id", id);
            // let doc: any = await db.restaurant.destroy({ where: { _id: id } });
            let doc = await super.delete(id);
            //   console.log("Inside Dal DOC:", doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async update(rawData) {
        console.log("rawData", rawData);
        // const doc: any = await db.restaurant.update(rawData, {
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
exports.RestaurantDAL = RestaurantDAL;
RestaurantDAL.RESTAURANT_COLLECTION = "restaurant";
//# sourceMappingURL=res.DAL.js.map