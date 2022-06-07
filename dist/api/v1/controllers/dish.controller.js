"use strict";
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
    async getAllDishes(req, res, next) {
        try {
            const queryParams = this._buildCriteria(req.query);
            const handler = new dish_handler_1.DishHandler();
            const dishes = await handler.getAllDishes(queryParams);
            res.json(dishes);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async createDish(req, res, next) {
        try {
            const handler = new dish_handler_1.DishHandler();
            const dish = await handler.addDish(req.body);
            res.json(dish);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async updateDish(req, res, next) {
        try {
            const handler = new dish_handler_1.DishHandler();
            const dishId = req.params.id;
            const dishData = req.body.dishData;
            const updatedDish = await handler.updateDish(dishId, dishData);
            res.json(updatedDish);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async filterSchools(req, res, next) { }
    async getDishById(req, res, next) {
        try {
            const handler = new dish_handler_1.DishHandler();
            const dishId = req.params.id;
            console.log(dishId);
            const dish = await handler.getDishById(dishId);
            res.json(dish);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async deleteDish(req, res, next) {
        try {
            const handler = new dish_handler_1.DishHandler();
            const dishId = req.params.id;
            const deleted = await handler.deleteDish(dishId);
            res.json(deleted);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
}
exports.DishController = DishController;
//# sourceMappingURL=dish.controller.js.map