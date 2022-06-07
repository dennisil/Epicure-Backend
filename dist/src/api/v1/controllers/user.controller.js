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
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryParams = this._buildCriteria(req.query);
                const handler = new user_handler_1.UserHandler();
                const dishes = yield handler.getAllUsers(queryParams);
                res.json(dishes);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const handler = new user_handler_1.UserHandler();
            let { password, userName } = req.body;
            const user = yield handler.login({ userName, password });
            let isMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!isMatch)
                res.json("Invalid credentials");
            const token = yield jsonwebtoken_1.default.sign({ user }, process.env.SECRET_KEY, { expiresIn: "1h" });
            res.json({ auth: true, token, user });
        });
    }
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new user_handler_1.UserHandler();
                let { password, userName, email } = req.body;
                if (password.length < 3)
                    res.json("Password must be at least 4 characters");
                password = yield bcrypt_1.default.hash(password, 10);
                const user = yield handler.addUser({ userName, password, email });
                res.json(user);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //   const handler = new UserHandler();
            //   const dishId = req.params.id;
            //   const dishData = req.body.dishData;
            //   const updatedDish = await handler.updateDish(dishId, dishData);
            //   res.json(updatedDish);
            // } catch (err) {
            //   res.status(400).send(err);
            // }
        });
    }
    filterSchools(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getUserById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new user_handler_1.UserHandler();
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
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //   const handler = new UserHandler();
            //   const dishId = req.params.id;
            //   const deleted = await handler.deleteDish(dishId);
            //   res.json(deleted);
            // } catch (err: any) {
            //   res.status(400).send(err);
            // }
        });
    }
    registerUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.UserController = UserController;
