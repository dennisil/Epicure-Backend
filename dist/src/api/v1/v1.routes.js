"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chef_controller_1 = require("./controllers/chef.controller");
const dish_controller_1 = require("./controllers/dish.controller");
const restaurant_controller_1 = require("./controllers/restaurant.controller");
const user_controller_1 = require("./controllers/user.controller");
class V1Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        const dishController = new dish_controller_1.DishController();
        const restaurantController = new restaurant_controller_1.ResController();
        const chefController = new chef_controller_1.ChefController();
        const userController = new user_controller_1.UserController();
        this.router.use("/dish", dishController.router);
        this.router.use("/user", userController.router);
        this.router.use("/restaurant", restaurantController.router);
        this.router.use("/chef", chefController.router);
    }
}
exports.default = V1Routes;
