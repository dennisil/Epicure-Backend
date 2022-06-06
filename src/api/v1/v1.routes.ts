import { Router, Request, Response, NextFunction } from "express";
import { ChefController } from "./controllers/chef.controller";
import { DishController } from "./controllers/dish.controller";
import { ResController } from "./controllers/restaurant.controller";
import { UserController } from "./controllers/user.controller";

class V1Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const dishController = new DishController();
    const restaurantController = new ResController();
    const chefController = new ChefController();
    const userController = new UserController();

    this.router.use("/dish", dishController.router);
    this.router.use("/user", userController.router);
    this.router.use("/restaurant", restaurantController.router);
    this.router.use("/chef", chefController.router);
  }
}

export default V1Routes;
