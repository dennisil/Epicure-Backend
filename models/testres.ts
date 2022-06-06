"use strict";
import { Model, UUIDV4 } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class testres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  testres.init(
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
      modelName: "testres",
    }
  );
  return testres;
};
