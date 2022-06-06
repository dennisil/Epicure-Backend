import { RestaurantHandler } from "../handlers/res.handler";
import AbsController from "./Base/AbsController";
import { APIFeatures } from "../../../utils/APIFeatures";
import { Authenticator } from "../middlewares/auth/Authenticator";
import Jwt from "jsonwebtoken";

export class ResController extends AbsController {
  protected initializeRoutes(): void {
    // Get Schools management Page Data
    this.router.get("/", this.getAllRestaurants.bind(this));

    // Create school
    this.router.post(
      "/",
      Authenticator.authUser,
      Authenticator.IsUserAdmin,
      this.addRestaurant.bind(this)
    );

    // Filter schools
    this.router.post(
      "/filter",

      this.filterSchools.bind(this)
    );

    // Get School details
    this.router.get("/:id", this.getRestaurantById.bind(this));

    // Update school
    this.router.patch(
      "/:id",
      Authenticator.authUser,
      Authenticator.IsUserAdmin,
      this.updateRestaurant.bind(this)
    );

    // Delete school
    this.router.delete(
      "/:id",
      Authenticator.authUser,
      Authenticator.IsUserAdmin,
      this.deleteRestaurant.bind(this)
    );
  }

  // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------

  public async getAllRestaurants(req: any, res: any, next: any) {
    try {
      const queryParams = this._buildCriteria(req.query);
      const handler = new RestaurantHandler();
      const restaurants = await handler.getAllRestaurants(queryParams);
      res.json(restaurants);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async getRestaurantById(req: any, res: any, next: any) {
    try {
      const handler = new RestaurantHandler();
      const resId = req.params.id;
      const restaurant = await handler.getRestaurantById(resId);
      res.json(restaurant);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async addRestaurant(req: any, res: any, next: any) {
    try {
      const handler = new RestaurantHandler();
      const restaurant = await handler.addRestaurant(req.body);
      res.json(restaurant);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async updateRestaurant(req: any, res: any, next: any) {
    try {
      const handler = new RestaurantHandler();
      const resId = req.params.id;
      const resData = req.body.resData;
      console.log(req.headers["x-access-token"]);
      // Jwt.verify(req.headers["x-access-token"], "secret",(err: any, decoded: any) => {
      //   if (err) console.log(err);
      //   else console.log("verified");
      // })
      const updatedRes = await handler.updateRestaurant(resId, resData);
      res.json(updatedRes);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async filterSchools(req: any, res: any, next: any) {}

  public async deleteRestaurant(req: any, res: any, next: any) {
    try {
      const handler = new RestaurantHandler();
      const resId = req.params.id;
      const deleted = await handler.deleteRestaurant(resId);
      res.json(deleted);
    } catch (err: any) {
      res.status(400).send(err);
    }
  }
  //   private _buildCriteria(query: any) {
  //     let criteria = {};
  //     let txtCriteria: any;
  //     if (query) {
  //       txtCriteria = { ...query };
  //       const excludedFields = ["page", "sort", "limit", "fields"];
  //       excludedFields.forEach((el) => delete txtCriteria[el]);
  //       let queryStr = JSON.stringify(txtCriteria);
  //       queryStr = queryStr.replace(
  //         /\b(gte|gt|lte|lt)\b/g,
  //         (match) => `$${match}`
  //       );
  //       txtCriteria = JSON.parse(queryStr);
  //     }
  //     if (query.page) {
  //       var page = query.page;
  //     }
  //     if (query.skip) {
  //       var skip = query.skip;
  //     }
  //     if (query.limit) {
  //       var limit = query.limit;
  //     }
  //     criteria = { txtCriteria, page, limit, skip };
  //     return criteria;
  //   }
}
