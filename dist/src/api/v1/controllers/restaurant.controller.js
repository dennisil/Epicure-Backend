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
    getAllRestaurants(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryParams = this._buildCriteria(req.query);
                const handler = new res_handler_1.RestaurantHandler();
                const restaurants = yield handler.getAllRestaurants(queryParams);
                res.json(restaurants);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    getRestaurantById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new res_handler_1.RestaurantHandler();
                const resId = req.params.id;
                const restaurant = yield handler.getRestaurantById(resId);
                res.json(restaurant);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    addRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new res_handler_1.RestaurantHandler();
                const restaurant = yield handler.addRestaurant(req.body);
                res.json(restaurant);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    updateRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new res_handler_1.RestaurantHandler();
                const resId = req.params.id;
                const resData = req.body.resData;
                console.log(req.headers["x-access-token"]);
                // Jwt.verify(req.headers["x-access-token"], "secret",(err: any, decoded: any) => {
                //   if (err) console.log(err);
                //   else console.log("verified");
                // })
                const updatedRes = yield handler.updateRestaurant(resId, resData);
                res.json(updatedRes);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    filterSchools(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new res_handler_1.RestaurantHandler();
                const resId = req.params.id;
                const deleted = yield handler.deleteRestaurant(resId);
                res.json(deleted);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
}
exports.ResController = ResController;
