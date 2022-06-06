import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ApiRoutes from "./api/routes";
// import "./db/mongoose-init";
import db from "../models";
import helmet from "helmet";
import fs from "fs";
import { users } from "../seeders/users";
import { chefs } from "../seeders/chefs";
// import config from "config";
// import expressValidator from "express-validator";
let testres:any = fs.readFileSync("./restaurant.json");
// console.log("testres", JSON.parse(testres));
testres = JSON.parse(testres)
class Appsql {
  public app: express.Application;
  public port: number;

  constructor(port: any) {
    this.app = express();
    this.port = port;
    this.initAppUsage();
  }

  private initAppUsage() {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    // const allowedOrigins: any = config.get("Security.AllowedOrigins");

    this.app.use(bodyParser.json());
    if (process.env.NODE_ENV == "production") {
      this.app.use(helmet());
    }
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors({ credentials: true }));

    this.app.use(function (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      if (process.env.NODE_ENV !== "production") {
        res.header("Access-Control-Allow-Origin", "*");
      }
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
  }

  private initializeRoutes() {
    const apiRoutes = new ApiRoutes();
    this.app.use("/api/", apiRoutes.router);
  }

  public async createItems() {
    // try {
    //   testres.map(async (c: any) => {
    //     await db.testres.create(c);
    //     console.log(c);
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  public listen() {
    // for sequelize
    db.sequelize.sync().then(() => {
      this.app.listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`);
      });
    });
    // this.app.listen(this.port, () => {
    //   console.log(`App listening on the port ${this.port}`);
    // });
  }
}

export default Appsql;
