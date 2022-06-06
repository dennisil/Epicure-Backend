import { DishHandler } from "../handlers/dish.handler";
import AbsController from "./Base/AbsController";

export class DishController extends AbsController {
  protected initializeRoutes(): void {
    // Get Schools management Page Data
    this.router.get("/", this.getAllDishes.bind(this));

    // Create school
    this.router.post(
      "/",

      this.createDish.bind(this)
    );

    // Filter schools
    this.router.post(
      "/filter",

      this.filterSchools.bind(this)
    );

    // Get School details
    this.router.get(
      "/:id",

      this.getDishById.bind(this)
    );

    // Update school
    this.router.patch(
      "/:id",

      this.updateDish.bind(this)
    );

    // Delete school
    this.router.delete(
      "/:id",

      this.deleteDish.bind(this)
    );
  }

  // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------

  public async getAllDishes(req: any, res: any, next: any) {
    try {
      const queryParams = this._buildCriteria(req.query);
      const handler = new DishHandler();
      const dishes = await handler.getAllDishes(queryParams);
      res.json(dishes);
    } catch (err) {
        res.status(400).send(err);
    }
  }

  public async createDish(req: any, res: any, next: any) {
    try {
      const handler = new DishHandler();
      const dish = await handler.addDish(req.body);
      res.json(dish);
    } catch (err) {
        res.status(400).send(err);
    }
  }

  public async updateDish(req: any, res: any, next: any) {
    try {
      const handler = new DishHandler();
      const dishId = req.params.id;
      const dishData = req.body.dishData;
      const updatedDish = await handler.updateDish(dishId, dishData);
      res.json(updatedDish);
    } catch (err) {
        res.status(400).send(err);
    }
  }

  public async filterSchools(req: any, res: any, next: any) {}

  public async getDishById(req: any, res: any, next: any) {
    try {
      const handler = new DishHandler();
      const dishId = req.params.id;
      console.log(dishId);
      const dish = await handler.getDishById(dishId);
      res.json(dish);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async deleteDish(req: any, res: any, next: any) {
    try {
      const handler = new DishHandler();
      const dishId = req.params.id;
      const deleted = await handler.deleteDish(dishId);
      res.json(deleted);
    } catch (err: any) {
        res.status(400).send(err);
    }
  }
}
