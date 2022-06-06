import { AbsDAL } from "./Base/AbsDAL";
import { ObjectId } from "mongodb";
import * as _ from "lodash";
import mongoose from "mongoose";
import { ChefModel } from "../../../db/models/chef/chef.model";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";

// sequelize
import db from "../../../../models";
export class ChefDAL extends AbsDAL {
  public static readonly CHEF_COLLECTION = "chef";

  protected getCollectionName(): string {
    return ChefDAL.CHEF_COLLECTION;
  }

  protected getModel() {
    return ChefModel;
  }

  protected getModelInstance(rawData: any) {
    const doc = new ChefModel(rawData);

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
      let doc: any = await db.chef.findOne({
        include: db.restaurant,
        where: { _id: docId },        
      });
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
      
      let doc: any = await db.chef.findAll(queryParams);
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
      let doc: any = await db.chef.create(res);
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
      let doc: any = await db.chef.destroy({ where: { _id: id } });
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
    const doc: any = await db.chef.update(rawData, {
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
