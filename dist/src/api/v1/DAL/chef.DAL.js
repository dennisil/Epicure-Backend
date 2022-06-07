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
exports.ChefDAL = void 0;
const AbsDAL_1 = require("./Base/AbsDAL");
const mongodb_1 = require("mongodb");
const chef_model_1 = require("../../../db/models/chef/chef.model");
const ErrorMsgs_1 = require("../entities/Errors/ErrorMsgs");
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
    read(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // let doc: any = await db.chef.findOne({
                //   include: db.restaurant,
                //   where: { _id: docId },
                // });
                const id = new mongodb_1.ObjectId(docId);
                let doc = yield chef_model_1.ChefModel.findById(id).populate({
                    path: "restaurants",
                });
                console.log(doc);
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
                // let doc: any = await db.chef.findAll(queryParams);
                let doc = yield _super.query.call(this);
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
                // let doc: any = await db.chef.create(res);
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
                // let doc: any = await db.chef.destroy({ where: { _id: id } });
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
            // const doc: any = await db.chef.update(rawData, {
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
exports.ChefDAL = ChefDAL;
ChefDAL.CHEF_COLLECTION = "chef";
