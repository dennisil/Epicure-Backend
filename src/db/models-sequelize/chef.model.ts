import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../sequelize-init";
// const sequelize = new Sequelize("sqlite::memory:");

export const Chef = sequelize.define("chef", {
  _id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  chefName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  chefRestaurants: {
    type: DataTypes.ARRAY,
  },
});
