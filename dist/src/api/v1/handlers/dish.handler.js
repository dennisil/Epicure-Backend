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
    getAllDishes(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const dishes = yield this.dishDAL.query(queryParams);
            return dishes;
        });
    }
    getDishById(dishId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dish = yield this.dishDAL.read(dishId);
            return dish;
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
     * @param dishToAdd
     */
    addDish(dishToAdd) {
        return __awaiter(this, void 0, void 0, function* () {
            const dish = yield this.dishDAL.create(dishToAdd);
            console.log("dish", dish);
            return dish;
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
    updateDish(dishId, rawData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedDish = yield this.dishDAL.update(Object.assign({ _id: dishId }, rawData));
            console.log("dish", updatedDish);
            return updatedDish;
        });
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    deleteDish(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.dishDAL.delete(id);
            return deleted;
        });
    }
}
exports.DishHandler = DishHandler;
