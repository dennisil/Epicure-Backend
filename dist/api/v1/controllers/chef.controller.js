"use strict";
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
    async getAllChefs(req, res, next) {
        try {
            const queryParams = this._buildCriteria(req.query);
            const handler = new chef_handler_1.ChefHandler();
            const chefs = await handler.getAllChefs(queryParams);
            res.json(chefs);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async getChefById(req, res, next) {
        try {
            const handler = new chef_handler_1.ChefHandler();
            const chefId = req.params.id;
            const chef = await handler.getChefById(chefId);
            res.json(chef);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async addChef(req, res, next) {
        try {
            const handler = new chef_handler_1.ChefHandler();
            const chef = await handler.addChef(req.body);
            console.log(chef);
            res.json(chef);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async updateChef(req, res, next) {
        try {
            const handler = new chef_handler_1.ChefHandler();
            const chefId = req.params.id;
            const chefData = req.body.chefData;
            const updateChef = await handler.updateChef(chefId, chefData);
            res.json(updateChef);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async filterSchools(req, res, next) { }
    async deleteChef(req, res, next) {
        try {
            const handler = new chef_handler_1.ChefHandler();
            const chefId = req.params.id;
            const deleted = await handler.deleteChef(chefId);
            res.json(deleted);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
}
exports.ChefController = ChefController;
//# sourceMappingURL=chef.controller.js.map