"use strict";
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
    async getAllChefs(queryParams) {
        const chef = await this.chefDAL.query(queryParams);
        return chef;
    }
    async getChefById(resId) {
        const chef = await this.chefDAL.read(resId);
        return chef;
    }
    /**
     * filterSchools
     * Get School details:
     * @param reqData
     */
    async filterSchools(reqData) { }
    /**
     * createSchool
     * Create new School:
     * @param reqData
     */
    async addChef(res) {
        const chef = await this.chefDAL.create(res);
        return chef;
    }
    /**
     * getSchoolDetails
     * Get School details:
     * @param reqData
     */
    async getSchoolDetails(reqData) { }
    /**
     * updateSchool
     * Update School details:
     * @param reqData
     */
    async updateChef(chefId, chefData) {
        const chef = chefData.chef;
        const resName = chefData.resName;
        const imgUrl = chefData.imgUrl;
        const updatedChef = await this.chefDAL.update({
            _id: chefId,
            chef,
            resName,
            imgUrl,
        });
        return updatedChef;
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    async deleteChef(id) {
        const deleted = await this.chefDAL.delete(id);
        return deleted;
    }
}
exports.ChefHandler = ChefHandler;
//# sourceMappingURL=chef.handler.js.map