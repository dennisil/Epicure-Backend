"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("Local Host", "root", "drt56abc", {
    host: "localhost",
    dialect: "mysql",
});
async function db_init() {
    try {
        await exports.sequelize.authenticate();
        await exports.sequelize.sync().then(res => console.log(res));
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
db_init();
//# sourceMappingURL=sequelize-init.js.map