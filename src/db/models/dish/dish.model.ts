import { Schema, model, Document } from "mongoose";
// import {
//   BoundTo,
//   Mesh,
//   StrongSchema,
//   createStrongSchema,
// } from "../../../utils/ts-coverage";
import { cleanObject } from "../../../generics/genericFunctions";
// import { DisplayItem } from "../../../api/v1/entities/displayItem";

export interface IDish {
  _id: string;
  resName: string;
  chef: string;
  imgUrl: string;
  price: number;
  dishName: string;
  ingredients: string;
  special?: string;
}

const dishSchema = new Schema(
  {
    resId: { type: Schema.Types.ObjectId, ref: "restaurant" },
    resName: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dishName: {
      unique: true,
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    special: {
      type: [String],
    },
  },
  { collection: "dish" }
);

// const SchoolSchema = createStrongSchema(({
//     _id: { type: String },
//     principle: { type:String },
//     principle_name: { type: String }
// } as StrongSchema<IDish>), new SchoolMethods(), { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

dishSchema.set("toJSON", {
  transform: function (doc: any, ret: any, option: any) {
    return cleanObject(ret);
  },
});

export const DishModel = model<IDish>("dish", dishSchema);
