import { Schema, model, Document } from "mongoose";
// import {
//   BoundTo,
//   Mesh,
//   StrongSchema,
//   createStrongSchema,
// } from "../../../utils/ts-coverage";
import { cleanObject } from "../../../generics/genericFunctions";
import { IDish } from "../dish/dish.model";
import { ObjectId } from "mongoose";
// import { DisplayItem } from "../../../api/v1/entities/displayItem";

export interface IChef {
  _id: string;
  resName: string;
  chef: string;
  imgUrl: string;
}

const chefSchema = new Schema(
  {
    chefRestaurants: {
      type: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
      required: true,
    },
    chef: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { collection: "chef" }
);

chefSchema.set("toJSON", {
  transform: function (doc: any, ret: any, option: any) {
    return cleanObject(ret);
  },
});

export const ChefModel = model<IChef>("chef", chefSchema);
