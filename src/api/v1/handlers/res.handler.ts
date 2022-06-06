import { AbsRequestHandler } from "./Base/AbsRequestHandler";
import * as _ from "lodash";
import { RestaurantDAL } from "../DAL/res.DAL";
import { ObjectId } from "mongoose";

export class RestaurantHandler extends AbsRequestHandler {
  private restaurantDAL = new RestaurantDAL();
  /**
   * getSchoolsManagementPageData
   * Get Schools managment page data:
   * - Schools list
   * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
   *
   * @param reqData
   */
  public async getAllRestaurants(queryParams: any) {
    const dishes = await this.restaurantDAL.query(queryParams);
    return dishes;
  }
  public async getRestaurantById(resId: any) {
    const restaurant = await this.restaurantDAL.read(resId);
    return restaurant;
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
   * @param reqData
   */
  public async addRestaurant(res: any) {
      console.log('res', res)
    const restaurant = await this.restaurantDAL.create(res);
    return restaurant;
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
  public async updateRestaurant(resId: string | ObjectId, rawData: any) {
    const updatedRes = await this.restaurantDAL.update({
      _id: resId,
      ...rawData,
    });
    return updatedRes;
  }

  /**
   * deleteSchool
   * Delete school:
   * @param reqData
   */
  public async deleteRestaurant(id: any) {
    const deleted = await this.restaurantDAL.delete(id);
    return deleted;
  }
}
