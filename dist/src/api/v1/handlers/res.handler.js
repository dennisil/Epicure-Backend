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
    getAllRestaurants(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const dishes = yield this.restaurantDAL.query(queryParams);
            return dishes;
        });
    }
    getRestaurantById(resId) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurant = yield this.restaurantDAL.read(resId);
            return restaurant;
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
    addRestaurant(res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('res', res);
            const restaurant = yield this.restaurantDAL.create(res);
            return restaurant;
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
    updateRestaurant(resId, rawData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedRes = yield this.restaurantDAL.update(Object.assign({ _id: resId }, rawData));
            return updatedRes;
        });
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    deleteRestaurant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.restaurantDAL.delete(id);
            return deleted;
        });
    }
}
exports.RestaurantHandler = RestaurantHandler;
