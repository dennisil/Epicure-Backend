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
exports.ChefController = void 0;
const chef_handler_1 = require("../handlers/chef.handler");
const AbsController_1 = __importDefault(require("./Base/AbsController"));
class ChefController extends AbsController_1.default {
    initializeRoutes() {
        // Get Schools management Page Data
        this.router.get("/", this.getAllChefs.bind(this));
        // Create school
        this.router.post("/", this.addChef.bind(this));
        // Filter schools
        this.router.post("/filter", this.filterSchools.bind(this));
        // Get School details
        this.router.get("/:id", this.getChefById.bind(this));
        // Update school
        this.router.patch("/:id", this.updateChef.bind(this));
        // Delete school
        this.router.delete("/:id", this.deleteChef.bind(this));
    }
    // ----------------------------------------- SCHOOLS MANGEMENT CONTROLLERS -----------------------------------------------
    getAllChefs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryParams = this._buildCriteria(req.query);
                const handler = new chef_handler_1.ChefHandler();
                const chefs = yield handler.getAllChefs(queryParams);
                res.json(chefs);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    getChefById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new chef_handler_1.ChefHandler();
                const chefId = req.params.id;
                const chef = yield handler.getChefById(chefId);
                res.json(chef);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    addChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new chef_handler_1.ChefHandler();
                const chef = yield handler.addChef(req.body);
                console.log(chef);
                res.json(chef);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    updateChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new chef_handler_1.ChefHandler();
                const chefId = req.params.id;
                const chefData = req.body.chefData;
                const updateChef = yield handler.updateChef(chefId, chefData);
                res.json(updateChef);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    filterSchools(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const handler = new chef_handler_1.ChefHandler();
                const chefId = req.params.id;
                const deleted = yield handler.deleteChef(chefId);
                res.json(deleted);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
}
exports.ChefController = ChefController;
