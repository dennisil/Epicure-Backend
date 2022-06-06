import { AbsRequestHandler } from "./Base/AbsRequestHandler";

import * as _ from "lodash";
import { DishDAL } from "../DAL/dish.DAL";
import { ObjectId } from "mongoose";

export class DishHandler extends AbsRequestHandler {
  private dishDAL = new DishDAL();
  /**
   * getSchoolsManagementPageData
   * Get Schools managment page data:
   * - Schools list
   * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
   *
   * @param reqData
   */
  public async getAllDishes(queryParams:any) {
    const dishes = await this.dishDAL.query(queryParams);
    return dishes;
  }
  public async getDishById(dishId: any) {
    const dish = await this.dishDAL.read(dishId);
    return dish;
  }

  /**
   * filterSchools
   * Get School details:
   * @param reqData
   */
  public async filterSchools(reqData: any) {}

  /**
   * createSchool
   * Create new School:
   * @param dishToAdd
   */
  public async addDish(dishToAdd: any) {
    const dish = await this.dishDAL.create(dishToAdd);
    console.log("dish", dish);
    return dish;
  }

  /**
   * getSchoolDetails
   * Get School details:
   * @param reqData
   */
  public async getSchoolDetails(reqData: any) {}

  /**
   * updateSchool
   * Update School details:
   * @param reqData
   */
  public async updateDish(dishId: string | ObjectId, rawData: any) {
    const updatedDish = await this.dishDAL.update({ _id: dishId, ...rawData });
    console.log("dish", updatedDish);
    return updatedDish;
  }

  /**
   * deleteSchool
   * Delete school:
   * @param reqData
   */
  public async deleteDish(id: any) {
    const deleted = await this.dishDAL.delete(id);
    return deleted;
  }
}
