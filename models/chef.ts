"use strict";
import { Model, UUIDV4 } from "sequelize";
export interface IChef {
  _id: string;
  chef: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class chef extends Model implements IChef {
    _id!: string;
    chef!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      chef.hasMany(models.restaurant, { foreignKey: "chefId" });
    }
  }
  chef.init(
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
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "chef",
    }
  );
  return chef;
};
