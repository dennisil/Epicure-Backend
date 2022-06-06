import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Local Host", "root", "drt56abc", {
  host: "localhost",
  dialect: "mysql",
});

async function db_init() {
  try {
    await sequelize.authenticate();
    await sequelize.sync().then(res => console.log(res))
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  
}
db_init();

