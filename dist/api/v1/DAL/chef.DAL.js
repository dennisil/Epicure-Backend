"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefDAL = void 0;
const AbsDAL_1 = require("./Base/AbsDAL");
const mongodb_1 = require("mongodb");
const chef_model_1 = require("../../../db/models/chef/chef.model");
const ErrorMsgs_1 = require("../entities/Errors/ErrorMsgs");
// sequelize
// import db from "../../../../models";
class ChefDAL extends AbsDAL_1.AbsDAL {
    getCollectionName() {
        return ChefDAL.CHEF_COLLECTION;
    }
    getModel() {
        return chef_model_1.ChefModel;
    }
    getModelInstance(rawData) {
        const doc = new chef_model_1.ChefModel(rawData);
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
            // let doc: any = await db.chef.findOne({
            //   include: db.restaurant,
            //   where: { _id: docId },
            // });
            const id = new mongodb_1.ObjectId(docId);
            let doc = await chef_model_1.ChefModel.findById(id).populate({
                path: "restaurants",
            });
            console.log(doc);
            return doc;
        }
        catch (error) {
            throw new ErrorMsgs_1.ErrorMsgs("Error occured while reading doc", error.message, false);
            throw new Error(error.message);
        }
    }
    async query(queryParams) {
        try {
            // let doc: any = await db.chef.findAll(queryParams);
            let doc = await super.query();
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
            // let doc: any = await db.chef.create(res);
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
            // let doc: any = await db.chef.destroy({ where: { _id: id } });
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
        // const doc: any = await db.chef.update(rawData, {
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
exports.ChefDAL = ChefDAL;
ChefDAL.CHEF_COLLECTION = "chef";
//# sourceMappingURL=chef.DAL.js.map