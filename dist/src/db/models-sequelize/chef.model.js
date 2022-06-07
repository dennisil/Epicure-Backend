"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const sequelize_1 = require("sequelize");
const sequelize_init_1 = require("../sequelize-init");
// const sequelize = new Sequelize("sqlite::memory:");
exports.Chef = sequelize_init_1.sequelize.define("chef", {
    _id: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    chefName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    chefRestaurants: {
        type: sequelize_1.DataTypes.ARRAY,
    },
});
