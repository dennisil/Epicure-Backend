"use strict";
import { Model, UUIDV4 } from "sequelize";
export interface IDish {
  _id: string;
  dishName: string;
  ingredients: string;
  resName: string;
  imgUrl: string;
  price: number;
  resId?: string;
  chef: string;
  special?: string[];
}
module.exports = (sequelize: any, DataTypes: any) => {
  class dish extends Model implements IDish {
    _id!: string;
    dishName!: string;
    ingredients!: string;
    resName!: string;
    imgUrl!: string;
    price!: number;
    resId?: string;
    chef!: string;
    special?: string[];
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      dish.belongsTo(models.restaurant, { foreignKey: "restaurantId" });
    }
  }
  dish.init(
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
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
    },
    {
      sequelize,
      modelName: "dish",
    }
  );
  return dish;
};
