import { AbsDAL } from "./Base/AbsDAL";
import { ObjectId } from "mongodb";
import * as _ from "lodash";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";
import { UserModel } from "../../../db/models/user/user.model";
import db from "../../../../models";

export class UserDAL extends AbsDAL {
  public static readonly Dish_COLLECTION = "user";

  protected getCollectionName(): string {
    return UserDAL.Dish_COLLECTION;
  }

  protected getModel() {
    return UserModel;
  }

  protected getModelInstance(rawData: any) {
    const doc = new UserModel(rawData);

    return doc;
  }

  /**
   * read
   * read single document
   * @param {any} docId document id
   *
   * @returns {Promise<any>}
   */
  public async read(docId: string): Promise<any> {
    try {
      let doc: any = await db.user.findOne({ where: { _id: docId } });
      return doc;
    } catch (error: any) {
      throw new ErrorMsgs(
        "Error occured while reading doc",
        error.message,
        false
      );
      throw new Error(error.message);
    }
  }
  public async query(queryParams: any): Promise<any> {
    try {
      let doc: any = await super.query(queryParams);
      return doc;
    } catch (error: any) {
      throw new ErrorMsgs(
        "Error occured while reading doc",
        error.message,
        false
      );
      throw new Error(error.message);
    }
  }
  public async delete(id: any): Promise<any> {
    try {
      let doc: any = await db.user.destroy({ where: { _id: id } });
      //   console.log("Inside Dal DOC:", doc);
      return doc;
    } catch (error: any) {
      throw new ErrorMsgs(
        "Error occured while reading doc",
        error.message,
        false
      );
      throw new Error(error.message);
    }
  }

  public async create(user: any): Promise<any> {
    try {
      let doc: any = await super.create(user);
      console.log("user", doc);
      return doc;
    } catch (error: any) {
      throw new ErrorMsgs(
        "Error occured while reading doc",
        error.message,
        false
      );
      throw new Error(error.message);
    }
  }

  public async update(rawData: any) {
    console.log("rawData", rawData);
    const doc: any = await super.update(rawData);
    return doc;
  }

  protected getQueryFilters(filters: any) {
    // let queryFilters = {};
    // queryFilters[`city`] = filters.cities && filters.cities.length > 0 ? filters.cities : null;;
    // queryFilters[`type`] = filters.schoolTypes && filters.schoolTypes.length > 0 ? filters.schoolTypes : null;
    // queryFilters = _.pickBy(queryFilters, _.identity);
    // return queryFilters;
  }
}
