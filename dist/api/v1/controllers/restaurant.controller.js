"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResController = void 0;
const res_handler_1 = require("../handlers/res.handler");
const AbsController_1 = __importDefault(require("./Base/AbsController"));
const Authenticator_1 = require("../middlewares/auth/Authenticator");
class ResController extends AbsController_1.default {
    initializeRoutes() {
        // Get Schools management Page Data
        this.router.get("/", this.getAllRestaurants.bind(this));
        // Create school
        this.router.post("/", Authenticator_1.Authenticator.authUser, Authenticator_1.Authenticator.IsUserAdmin, this.addRestaurant.bind(this));
        // Filter schools
        this.router.post("/filter", this.filterSchools.bind(this));
        // Get School details
        this.router.get("/:id", this.getRestaurantById.bind(this));
        // Update school
        this.router.patch("/:id", Authenticator_1.Authenticator.authUser, Authenticator_1.Authenticator.IsUserAdmin, this.updateRestaurant.bind(this));
        // Delete school
        this.router.delete("/:id", Authenticator_1.Authenticator.authUser, Authenticator_1.Authenticator.IsUserAdmin, this.deleteRestaurant.bind(this));
    }
    // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------
    async getAllRestaurants(req, res, next) {
        try {
            const queryParams = this._buildCriteria(req.query);
            const handler = new res_handler_1.RestaurantHandler();
            const restaurants = await handler.getAllRestaurants(queryParams);
            res.json(restaurants);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async getRestaurantById(req, res, next) {
        try {
            const handler = new res_handler_1.RestaurantHandler();
            const resId = req.params.id;
            const restaurant = await handler.getRestaurantById(resId);
            res.json(restaurant);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async addRestaurant(req, res, next) {
        try {
            const handler = new res_handler_1.RestaurantHandler();
            const restaurant = await handler.addRestaurant(req.body);
            res.json(restaurant);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async updateRestaurant(req, res, next) {
        try {
            const handler = new res_handler_1.RestaurantHandler();
            const resId = req.params.id;
            const resData = req.body.resData;
            console.log(req.headers["x-access-token"]);
            // Jwt.verify(req.headers["x-access-token"], "secret",(err: any, decoded: any) => {
            //   if (err) console.log(err);
            //   else console.log("verified");
            // })
            const updatedRes = await handler.updateRestaurant(resId, resData);
            res.json(updatedRes);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async filterSchools(req, res, next) { }
    async deleteRestaurant(req, res, next) {
        try {
            const handler = new res_handler_1.RestaurantHandler();
            const resId = req.params.id;
            const deleted = await handler.deleteRestaurant(resId);
            res.json(deleted);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
}
exports.ResController = ResController;
//# sourceMappingURL=restaurant.controller.js.map