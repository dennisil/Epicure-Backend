import { AbsDAL } from "./Base/AbsDAL";
import { ObjectId } from "mongodb";
import * as _ from "lodash";
import { DishModel } from "../../../db/models/dish/dish.model";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";

// sequelize
import db from "../../../../models";

export class DishDAL extends AbsDAL {
  public static readonly Dish_COLLECTION = "dish";

  protected getCollectionName(): string {
    return DishDAL.Dish_COLLECTION;
  }

  protected getModel() {
    return DishModel;
  }

  protected getModelInstance(rawData: any) {
    const doc = new DishModel(rawData);

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
      // let doc: any = await db.dish.findOne({ where: { _id: docId } });
      const id = new ObjectId(docId);
      let doc: any = await super.read(id);
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
      // let doc: any = await db.dish.findAll(queryParams);
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
      // let doc: any = await db.dish.destroy({ where: { _id: id } });
      let doc: any = await super.delete(id);
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

  public async create(dish: any): Promise<any> {
    try {
      //   if (dish.resId) dish.resId = new ObjectId(dish.resId);
      // let doc: any = await db.dish.create(dish);
      let doc: any = await super.create(dish);
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
    // const filter = { _id: rawData._id };
    console.log("rawData", rawData);
    // const doc: any = await db.dish.update(rawData, {
    //   where: { _id: rawData._id },
    // });
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
