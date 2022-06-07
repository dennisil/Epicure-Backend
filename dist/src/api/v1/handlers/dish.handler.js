"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishHandler = void 0;
const AbsRequestHandler_1 = require("./Base/AbsRequestHandler");
const dish_DAL_1 = require("../DAL/dish.DAL");
class DishHandler extends AbsRequestHandler_1.AbsRequestHandler {
    constructor() {
        super(...arguments);
        this.dishDAL = new dish_DAL_1.DishDAL();
    }
    /**
     * getSchoolsManagementPageData
     * Get Schools managment page data:
     * - Schools list
     * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
     *
     * @param reqData
     */
    async getAllDishes(queryParams) {
        const dishes = await this.dishDAL.query(queryParams);
        return dishes;
    }
    async getDishById(dishId) {
        const dish = await this.dishDAL.read(dishId);
        return dish;
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
     * @param dishToAdd
     */
    async addDish(dishToAdd) {
        const dish = await this.dishDAL.create(dishToAdd);
        console.log("dish", dish);
        return dish;
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
    async updateDish(dishId, rawData) {
        const updatedDish = await this.dishDAL.update(Object.assign({ _id: dishId }, rawData));
        console.log("dish", updatedDish);
        return updatedDish;
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    async deleteDish(id) {
        const deleted = await this.dishDAL.delete(id);
        return deleted;
    }
}
exports.DishHandler = DishHandler;
//# sourceMappingURL=dish.handler.js.map