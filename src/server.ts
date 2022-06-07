import App from "./app";
require("dotenv").config();

// const appsql = new Appsql(process.env.PORT);
// appsql.listen();

// mongo server
const app = new App(process.env.PORT);
app.listen();
// app.createItems()
