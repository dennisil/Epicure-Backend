import { ChefHandler } from "../handlers/chef.handler";
import AbsController from "./Base/AbsController";

export class ChefController extends AbsController {
  protected initializeRoutes(): void {
    // Get Schools management Page Data
    this.router.get("/", this.getAllChefs.bind(this));

    // Create school
    this.router.post(
      "/",

      this.addChef.bind(this)
    );

    // Filter schools
    this.router.post(
      "/filter",

      this.filterSchools.bind(this)
    );

    // Get School details
    this.router.get(
      "/:id",

      this.getChefById.bind(this)
    );

    // Update school
    this.router.patch(
      "/:id",

      this.updateChef.bind(this)
    );

    // Delete school
    this.router.delete(
      "/:id",

      this.deleteChef.bind(this)
    );
  }

  // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------

  public async getAllChefs(req: any, res: any, next: any) {
    try {
      const queryParams = this._buildCriteria(req.query);
      const handler = new ChefHandler();
      const chefs = await handler.getAllChefs(queryParams);
      res.json(chefs);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async getChefById(req: any, res: any, next: any) {
    try {
      const handler = new ChefHandler();
      const chefId = req.params.id;
      const chef = await handler.getChefById(chefId);
      res.json(chef);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async addChef(req: any, res: any, next: any) {
    try {
      const handler = new ChefHandler();
      const chef = await handler.addChef(req.body);
      console.log(chef);
      res.json(chef);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async updateChef(req: any, res: any, next: any) {
    try {
      const handler = new ChefHandler();
      const chefId = req.params.id;
      const chefData = req.body.chefData;
      const updateChef = await handler.updateChef(chefId, chefData);
      res.json(updateChef);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async filterSchools(req: any, res: any, next: any) {}

  public async deleteChef(req: any, res: any, next: any) {
    try {
      const handler = new ChefHandler();
      const chefId = req.params.id;
      const deleted = await handler.deleteChef(chefId);
      res.json(deleted);
    } catch (err: any) {
      res.status(400).send(err);
    }
  }
}
