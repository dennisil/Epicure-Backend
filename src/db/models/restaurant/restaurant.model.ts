import { Schema, model } from "mongoose";
import { cleanObject } from "../../../generics/genericFunctions";

export interface IRestaurant {
  _id: string;
  resName: string;
  chef: string;
  imgUrl: string;
  price: number;
  dishName: string;
  ingredients: string;
  special?: string;
}

const restaurantSchema = new Schema(
  {
    resName: {
      type: String,
      unique: true,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
      default: "/imgs/dishes/lumina.jpg",
    },
    tags: {
      type: [String],
      required: true,
    },
    dishes: [{ type: Schema.Types.ObjectId, ref: "dish" }],
  },
  { collection: "restaurant" }
);

restaurantSchema.set("toJSON", {
  transform: function (doc: any, ret: any, option: any) {
    return cleanObject(ret);
  },
});

export const RestaurantModel = model<IRestaurant>(
  "restaurant",
  restaurantSchema
);
