"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class restaurant extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            restaurant.belongsTo(models.chef, {
                foreignKey: "chefId",
                as: "ChefId",
            });
            restaurant.hasMany(models.dish, {
                foreignKey: "restaurantId",
            });
        }
    }
    restaurant.init({
        _id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        resName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Claro"
        },
        chef: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "/imgs/dishes/lumina.jpg",
        },
    }, {
        sequelize,
        modelName: "restaurant",
    });
    return restaurant;
};
