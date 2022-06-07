"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class dish extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            dish.belongsTo(models.restaurant, { foreignKey: "restaurantId" });
        }
    }
    dish.init({
        _id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        chef: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dishName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 90,
        },
    }, {
        sequelize,
        modelName: "dish",
    });
    return dish;
};
