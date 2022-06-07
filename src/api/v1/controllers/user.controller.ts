import { UserHandler } from "../handlers/user.handler";
import AbsController from "./Base/AbsController";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
require("dotenv").config();

export class UserController extends AbsController {
  protected initializeRoutes(): void {
    // Get Schools management Page Data
    this.router.get("/", this.getAllUsers.bind(this));

    // Create school
    this.router.post(
      "/",

      this.signUp.bind(this)
    );

    // Filter schools
    this.router.post(
      "/login",

      this.login.bind(this)
    );

    // Get School details
    this.router.get(
      "/:id",

      this.getUserById.bind(this)
    );

    // Update school
    this.router.patch(
      "/:id",

      this.updateUser.bind(this)
    );

    // Delete school
    this.router.delete(
      "/:id",

      this.deleteUser.bind(this)
    );
  }

  // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------

  public async getAllUsers(req: any, res: any, next: any) {
    try {
      const queryParams = this._buildCriteria(req.query);
      const handler = new UserHandler();
      const dishes = await handler.getAllUsers(queryParams);
      res.json(dishes);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async login(req: any, res: any, next: any) {
    const handler = new UserHandler();
    let { password, userName } = req.body;
    const user = await handler.login({ userName, password });
    let isMatch = await bcrypt.compare(password, user!.password);
    if (!isMatch) res.json("Invalid credentials");
    const token = await JWT.sign({ user }, process.env.SECRET_KEY!, { expiresIn: "1h" });
    res.json({ auth: true, token, user });
  }

  public async signUp(req: any, res: any, next: any) {
    try {
      const handler = new UserHandler();
      let { password, userName, email } = req.body;
      if (password.length < 3)
        res.json("Password must be at least 4 characters");
      password = await bcrypt.hash(password, 10);
      const user: any = await handler.addUser({ userName, password, email });
      res.json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async updateUser(req: any, res: any, next: any) {
    // try {
    //   const handler = new UserHandler();
    //   const dishId = req.params.id;
    //   const dishData = req.body.dishData;
    //   const updatedDish = await handler.updateDish(dishId, dishData);
    //   res.json(updatedDish);
    // } catch (err) {
    //   res.status(400).send(err);
    // }
  }

  public async filterSchools(req: any, res: any, next: any) {}

  public async getUserById(req: any, res: any, next: any) {
    try {
      const handler = new UserHandler();
      const dishId = req.params.id;
      console.log(dishId);
      const dish = await handler.getDishById(dishId);
      res.json(dish);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public async deleteUser(req: any, res: any, next: any) {
    // try {
    //   const handler = new UserHandler();
    //   const dishId = req.params.id;
    //   const deleted = await handler.deleteDish(dishId);
    //   res.json(deleted);
    // } catch (err: any) {
    //   res.status(400).send(err);
    // }
  }

  public async registerUser(req: any, res: any, next: any) {}
}
