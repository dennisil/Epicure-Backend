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
    getAllUsers(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const dishes = yield this.userDAL.query(queryParams);
            return dishes;
        });
    }
    getDishById(dishId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dish = yield this.userDAL.read(dishId);
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
     * @param userToAdd
     */
    addUser(userToAdd) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userToAdd);
            const user = yield models_1.default.user.create(userToAdd);
            console.log("dish", user);
            return user;
        });
    }
    login(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            let { userName, password } = credentials;
            if (!password || !userName)
                return;
            const user = yield models_1.default.user.findOne({ where: { userName: userName } });
            console.log(user);
            return user;
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
            const updatedDish = yield this.userDAL.update(Object.assign({ _id: dishId }, rawData));
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
            const deleted = yield this.userDAL.delete(id);
            return deleted;
        });
    }
}
exports.UserHandler = UserHandler;
