import Appsql from "./appsql";
import App from "./app";
require("dotenv").config();

const appsql = new Appsql(process.env.PORT);
appsql.listen();

// mongo server
// const app = new App(2799);
// app.listen();
// app.createItems()
