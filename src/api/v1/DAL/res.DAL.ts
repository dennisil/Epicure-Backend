import { AbsDAL } from "./Base/AbsDAL";
import { ObjectId } from "mongodb";
import * as _ from "lodash";
import { RestaurantModel } from "../../../db/models/restaurant/restaurant.model";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";
// sequlize
import db from "../../../../models";

export class RestaurantDAL extends AbsDAL {
  public static readonly RESTAURANT_COLLECTION = "restaurant";

  protected getCollectionName(): string {
    return RestaurantDAL.RESTAURANT_COLLECTION;
  }

  protected getModel() {
    return RestaurantModel;
  }

  protected getModelInstance(rawData: any) {
    const doc = new RestaurantModel(rawData);

    return doc;
  }

  /**
   * read
   * read single document
   * @param {any} docId document id
   *
   * @returns {Promise<any>}
   */
  public async read(docId: any): Promise<any> {
    try {
      console.log("docId", docId);
      // const id = new ObjectId(docId);
      const restaurant = await db.restaurant.findOne({
        include: db.dish,
        where: { _id: docId },
      });
      console.log("restaurant", restaurant);
      return restaurant;
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
      let { txtCriteria, limit,offset } = queryParams || "";
      // if (!txtCriteria.length) txtCriteria = ""
      console.log("queryParams", queryParams);
      let doc: any = await db.restaurant.findAll({
        where: txtCriteria,
        offset,
        limit,
      });
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
  public async create(res: any): Promise<any> {
    try {
      let doc: any = await db.restaurant.create(res);
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
  public async delete(id: any): Promise<any> {
    try {
      console.log("id", id);
      let doc: any = await db.restaurant.destroy({ where: { _id: id } });
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

  public async update(rawData: any) {
    console.log("rawData", rawData);
    const doc: any = await db.restaurant.update(rawData, {
      where: { _id: rawData._id },
    });
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
