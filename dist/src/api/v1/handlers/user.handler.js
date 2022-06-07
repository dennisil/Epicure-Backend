"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
const AbsRequestHandler_1 = require("./Base/AbsRequestHandler");
const user_DAL_1 = require("../DAL/user.DAL");
const models_1 = __importDefault(require("../../../../models"));
class UserHandler extends AbsRequestHandler_1.AbsRequestHandler {
    constructor() {
        super(...arguments);
        this.userDAL = new user_DAL_1.UserDAL();
    }
    /**
     * getSchoolsManagementPageData
     * Get Schools managment page data:
     * - Schools list
     * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
     *
     * @param reqData
     */
    async getAllUsers(queryParams) {
        const dishes = await this.userDAL.query(queryParams);
        return dishes;
    }
    async getDishById(dishId) {
        const dish = await this.userDAL.read(dishId);
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
     * @param userToAdd
     */
    async addUser(userToAdd) {
        console.log(userToAdd);
        const user = await models_1.default.user.create(userToAdd);
        console.log("dish", user);
        return user;
    }
    async login(credentials) {
        let { userName, password } = credentials;
        if (!password || !userName)
            return;
        const user = await models_1.default.user.findOne({ where: { userName: userName } });
        console.log(user);
        return user;
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
        const updatedDish = await this.userDAL.update(Object.assign({ _id: dishId }, rawData));
        console.log("dish", updatedDish);
        return updatedDish;
    }
    /**
     * deleteSchool
     * Delete school:
     * @param reqData
     */
    async deleteDish(id) {
        const deleted = await this.userDAL.delete(id);
        return deleted;
    }
}
exports.UserHandler = UserHandler;
//# sourceMappingURL=user.handler.js.map