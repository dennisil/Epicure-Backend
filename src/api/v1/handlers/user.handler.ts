import { AbsRequestHandler } from "./Base/AbsRequestHandler";
import { UserModel } from "../../../db/models/user/user.model";
import * as _ from "lodash";
import { ObjectId } from "mongoose";
import { UserDAL } from "../DAL/user.DAL";
// import db from "../../../../models";

export class UserHandler extends AbsRequestHandler {
  private userDAL = new UserDAL();
  /**
   * getSchoolsManagementPageData
   * Get Schools managment page data:
   * - Schools list
   * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
   *
   * @param reqData
   */
  public async getAllUsers(queryParams: any) {
    const dishes = await this.userDAL.query(queryParams);
    return dishes;
  }
  public async getDishById(dishId: any) {
    const dish = await this.userDAL.read(dishId);
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
   * @param userToAdd
   */
  public async addUser(userToAdd: any) {
    console.log(userToAdd);
    const user = await UserModel.create(userToAdd);
    console.log("dish", user);
    return user;
  }

  public async login(credentials: { userName: string; password: string }) {
    let { userName, password } = credentials;
    if (!password || !userName) return;
    const user = await UserModel.findOne( { userName: userName } );
    console.log(user);
    return user;
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
    const updatedDish = await this.userDAL.update({ _id: dishId, ...rawData });
    console.log("dish", updatedDish);
    return updatedDish;
  }

  /**
   * deleteSchool
   * Delete school:
   * @param reqData
   */
  public async deleteDish(id: any) {
    const deleted = await this.userDAL.delete(id);
    return deleted;
  }
}
