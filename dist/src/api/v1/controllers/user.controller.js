"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_handler_1 = require("../handlers/user.handler");
const AbsController_1 = __importDefault(require("./Base/AbsController"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
require("dotenv").config();
class UserController extends AbsController_1.default {
    initializeRoutes() {
        // Get Schools management Page Data
        this.router.get("/", this.getAllUsers.bind(this));
        // Create school
        this.router.post("/", this.signUp.bind(this));
        // Filter schools
        this.router.post("/login", this.login.bind(this));
        // Get School details
        this.router.get("/:id", this.getUserById.bind(this));
        // Update school
        this.router.patch("/:id", this.updateUser.bind(this));
        // Delete school
        this.router.delete("/:id", this.deleteUser.bind(this));
    }
    // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------
    async getAllUsers(req, res, next) {
        try {
            const queryParams = this._buildCriteria(req.query);
            const handler = new user_handler_1.UserHandler();
            const dishes = await handler.getAllUsers(queryParams);
            res.json(dishes);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async login(req, res, next) {
        const handler = new user_handler_1.UserHandler();
        let { password, userName } = req.body;
        const user = await handler.login({ userName, password });
        let isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            res.json("Invalid credentials");
        const token = await jsonwebtoken_1.default.sign({ user }, process.env.SECRET_KEY, { expiresIn: "1h" });
        res.json({ auth: true, token, user });
    }
    async signUp(req, res, next) {
        try {
            const handler = new user_handler_1.UserHandler();
            let { password, userName, email } = req.body;
            if (password.length < 3)
                res.json("Password must be at least 4 characters");
            password = await bcrypt_1.default.hash(password, 10);
            const user = await handler.addUser({ userName, password, email });
            res.json(user);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async updateUser(req, res, next) {
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
    async filterSchools(req, res, next) { }
    async getUserById(req, res, next) {
        try {
            const handler = new user_handler_1.UserHandler();
            const dishId = req.params.id;
            console.log(dishId);
            const dish = await handler.getDishById(dishId);
            res.json(dish);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async deleteUser(req, res, next) {
        // try {
        //   const handler = new UserHandler();
        //   const dishId = req.params.id;
        //   const deleted = await handler.deleteDish(dishId);
        //   res.json(deleted);
        // } catch (err: any) {
        //   res.status(400).send(err);
        // }
    }
    async registerUser(req, res, next) { }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map