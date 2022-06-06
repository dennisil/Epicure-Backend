import { Schema, model, Document } from "mongoose";
// import {
//   BoundTo,
//   Mesh,
//   StrongSchema,
//   createStrongSchema,
// } from "../../../utils/ts-coverage";
import { cleanObject } from "../../../generics/genericFunctions";
import { ObjectId } from "mongoose";
// import { DisplayItem } from "../../../api/v1/entities/displayItem";

export interface IUser {
  _id: string;
  userName: string;
  password: string;
}

var validateEmail = function (email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      validate: [validateEmail, "Please fill a valid email address"],
    },
    isAdmin : {
        type: Boolean,
        default: false
    }
 
  },
  { collection: "user" }
);

userSchema.set("toJSON", {
  transform: function (doc: any, ret: any, option: any) {
    return cleanObject(ret);
  },
});

export const UserModel = model<IUser>("user", userSchema);
