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
exports.AbsDAL = void 0;
const ErrorMsgs_1 = require("../../entities/Errors/ErrorMsgs");
class AbsDAL {
    /**
     * filter
     * filter db collection
     *
     * @param {any} filters Filters object
     * @param {any} pagination Pagination object
     *
     * @returns {Promise<any>}  Mapped DB Result
     */
    filter(filters, pagination, projection, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.getModel();
                const query = this.buildQuery(filters, pagination);
                const res = yield Promise.all([
                    model
                        .find(query.filter, projection, options)
                        .skip(query.skip)
                        .limit(query.limit),
                    model.countDocuments(query.filter),
                ]);
                const hits = res[0];
                const count = res[1];
                return { hits, count };
            }
            catch (error) {
                //   throw new ErrorMsgs("Failed to filter docs", error.message, false);
            }
        });
    }
    /**
     * create
     * create new document
     *
     * @param {any} rawData Document raw data
     *
     * @returns {Promise<any>}
     */
    create(rawData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = this.getModelInstance(rawData);
                const document = yield doc.save();
                return document;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to create doc", error.message, false);
            }
        });
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
                const model = this.getModel();
                const doc = yield model.findById(docId);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to read doc", error.message, false);
            }
        });
    }
    query(query = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!query.limit)
                query.limit = 15;
            try {
                const model = this.getModel();
                const doc = yield model
                    .find(query.txtCriteria)
                    .skip(query.skip)
                    .limit(query.limit);
                return doc;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to read doc", error.message, false);
            }
        });
    }
    /**
     * update
     * update document
     * @param {any} rawData Document raw data
     *
     * @returns {Promise<any>}
     */
    update(rawData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.getModel();
                const filter = { _id: rawData._id };
                const update = this.getUpdateObj(rawData);
                const isUpdated = true;
                const res = yield model.updateMany(filter, update);
                return { isUpdated };
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to update doc", error.message, false);
            }
        });
    }
    /**
     * delete
     * delete document
     * @param {any} rawData Document raw data
     *
     * @returns {Promise<any>}
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.getModel();
                const isDeleted = true;
                const res = yield model.deleteOne({ _id: id });
                return { isDeleted };
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to delete doc", error.message, false);
            }
        });
    }
    /**
     * deleteMany
     * delete multiple documents by filter
     * @param {any} filter filter
     *
     * @returns {Promise<any>}
     */
    deleteMany(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.getModel();
                const isDeleted = true;
                const res = yield model.deleteMany(filter);
                return { isDeleted };
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to delete docs", error.message, false);
            }
        });
    }
    /**
     * get
     * get documents - no permissions - for server internal use
     * @param {any} filters Filters object
     *
     * @returns {Promise<any>}
     */
    get(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = this.getModel();
                const docs = yield model.find(filters);
                return docs;
            }
            catch (error) {
                throw new ErrorMsgs_1.ErrorMsgs("Failed to get docs", error.message, false);
            }
        });
    }
    getUpdateObj(rawData) {
        delete rawData._id;
        return rawData;
    }
    // ------------------------------------------- PRIVATE METHODS --------------------------------------------
    buildQuery(filters, pagination) {
        const queryFilters = this.getQueryFilters(filters);
        let query = Object.assign({ filter: Object.assign({}, queryFilters) }, pagination);
        Object.keys(query.filter).forEach((key) => {
            if (!query.filter[`${key}`]) {
                delete query.filter[`${key}`];
            }
        });
        return query;
    }
}
exports.AbsDAL = AbsDAL;
