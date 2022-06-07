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
exports.DishController = void 0;
const dish_handler_1 = require("../handlers/dish.handler");
const AbsController_1 = __importDefault(require("./Base/AbsController"));
class DishController extends AbsController_1.default {
    initializeRoutes() {
        // Get Schools management Page Data
        this.router.get("/", this.getAllDishes.bind(this));
        // Create school
        this.router.post("/", this.createDish.bind(this));
        // Filter schools
        this.router.post("/filter", this.filterSchools.bind(this));
        // Get School details
        this.router.get("/:id", this.getDishById.bind(this));
        // Update school
        this.router.patch("/:id", this.updateDish.bind(this));
        // Delete school
        this.router.delete("/:id", this.deleteDish.bind(this));
    }
    // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------
    getAllDishes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryParams = this._buildCriteria(req.query);
                const handler = new dish_handler_1.DishHandler();
                const dishes = yield handler.getAllDishes(queryParams);
                res.json(dishes);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    createDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new dish_handler_1.DishHandler();
                const dish = yield handler.addDish(req.body);
                res.json(dish);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    updateDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new dish_handler_1.DishHandler();
                const dishId = req.params.id;
                const dishData = req.body.dishData;
                const updatedDish = yield handler.updateDish(dishId, dishData);
                res.json(updatedDish);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    filterSchools(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getDishById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new dish_handler_1.DishHandler();
                const dishId = req.params.id;
                console.log(dishId);
                const dish = yield handler.getDishById(dishId);
                res.json(dish);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    deleteDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new dish_handler_1.DishHandler();
                const dishId = req.params.id;
                const deleted = yield handler.deleteDish(dishId);
                res.json(deleted);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
}
exports.DishController = DishController;
