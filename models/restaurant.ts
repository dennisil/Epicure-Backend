"use strict";
import { Model, UUIDV4 } from "sequelize";

export interface IRestaurant {
  _id: string;
  resName: string;
  chef: string;
  imgUrl: string;
  dishes?: string[];
  tags?: string[];
}
module.exports = (sequelize: any, DataTypes: any) => {
  class restaurant extends Model<IRestaurant> implements IRestaurant {
    _id!: string;
    resName!: string;
    chef!: string;
    imgUrl!: string;
    dishes?: string[];
    tags?: string[];
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      restaurant.belongsTo(models.chef, {
        foreignKey: "chefId",
        as: "ChefId",
      });
      restaurant.hasMany(models.dish, {
        foreignKey: "restaurantId",
      });
    }
  }
  restaurant.init(
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
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
  
    },
    {
      sequelize,
      modelName: "restaurant",
    }
  );
  return restaurant;
};
