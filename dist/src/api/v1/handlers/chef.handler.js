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
exports.ChefHandler = void 0;
const AbsRequestHandler_1 = require("./Base/AbsRequestHandler");
const chef_DAL_1 = require("../DAL/chef.DAL");
class ChefHandler extends AbsRequestHandler_1.AbsRequestHandler {
    constructor() {
        super(...arguments);
        this.chefDAL = new chef_DAL_1.ChefDAL();
    }
    /**
     * getSchoolsManagementPageData
     * Get Schools managment page data:
     * - Schools list
     * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
     *
     * @param reqData
     */
    getAllChefs(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const chef = yield this.chefDAL.query(queryParams);
            return chef;
        });
    }
    getChefById(resId) {
        return __awaiter(this, void 0, void 0, function* () {
            const chef = yield this.chefDAL.read(resId);
            return chef;
        });
    }
    /**
     * filterSchools
     * Get School details:
     * @param reqData
     */
    filterSchools(reqData) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * createSchool
     * Create new School:
     * @param reqData
     */
    addChef(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const chef = yield this.chefDAL.create(res);
            return chef;
        });
    }
    /**
     * getSchoolDetails
     * Get School details:
     * @param reqData
     */
    getSchoolDetails(reqData) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * updateSchool
     * Update School details:
     * @param reqData
     */
    updateChef(chefId, chefData) {
        return __awaiter(this, void 0, void 0, function* () {
            const chef = chefData.chef;
            const resName = chefData.resName;
            const imgUrl = chefData.imgUrl;
            const updatedChef = yield this.chefDAL.update({
                _id: chefId,
                chef,
                resName,
                imgUrl,
            });
            return updatedChef;
        });
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    deleteChef(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.chefDAL.delete(id);
            return deleted;
        });
    }
}
exports.ChefHandler = ChefHandler;
