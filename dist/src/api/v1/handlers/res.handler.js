"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantHandler = void 0;
const AbsRequestHandler_1 = require("./Base/AbsRequestHandler");
const res_DAL_1 = require("../DAL/res.DAL");
class RestaurantHandler extends AbsRequestHandler_1.AbsRequestHandler {
    constructor() {
        super(...arguments);
        this.restaurantDAL = new res_DAL_1.RestaurantDAL();
    }
    /**
     * getSchoolsManagementPageData
     * Get Schools managment page data:
     * - Schools list
     * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
     *
     * @param reqData
     */
    async getAllRestaurants(queryParams) {
        const dishes = await this.restaurantDAL.query(queryParams);
        return dishes;
    }
    async getRestaurantById(resId) {
        const restaurant = await this.restaurantDAL.read(resId);
        return restaurant;
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
    async addRestaurant(res) {
        console.log('res', res);
        const restaurant = await this.restaurantDAL.create(res);
        return restaurant;
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
    async updateRestaurant(resId, rawData) {
        const updatedRes = await this.restaurantDAL.update(Object.assign({ _id: resId }, rawData));
        return updatedRes;
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    async deleteRestaurant(id) {
        const deleted = await this.restaurantDAL.delete(id);
        return deleted;
    }
}
exports.RestaurantHandler = RestaurantHandler;
//# sourceMappingURL=res.handler.js.map