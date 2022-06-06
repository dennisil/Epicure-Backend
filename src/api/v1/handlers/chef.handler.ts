import { AbsRequestHandler } from "./Base/AbsRequestHandler";
import * as _ from "lodash";
import { ChefDAL } from "../DAL/chef.DAL";
import { ObjectId } from "mongoose";

export class ChefHandler extends AbsRequestHandler {
  private chefDAL = new ChefDAL();
  /**
   * getSchoolsManagementPageData
   * Get Schools managment page data:
   * - Schools list
   * - Dropdowns - cities, school types, school sizes, districts, orientations, networks
   *
   * @param reqData
   */
  public async getAllChefs(queryParams:any) {
    const chef = await this.chefDAL.query(queryParams);
    return chef;
  }
  public async getChefById(resId: any) {
    const chef = await this.chefDAL.read(resId);
    return chef;
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
  public async addChef(res: any) {
    const chef = await this.chefDAL.create(res);
    return chef;
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
  public async updateChef(chefId: string | ObjectId, chefData: any) {
    const chef = chefData.chef;
    const resName = chefData.resName;
    const imgUrl = chefData.imgUrl;
    const updatedChef = await this.chefDAL.update({
      _id: chefId,
      chef,
      resName,
      imgUrl,
    });
    return updatedChef;
  }

  /**
   * deleteSchool
   * Delete school:
   * @param reqData
   */
  public async deleteChef(id: any) {
    const deleted = await this.chefDAL.delete(id);
    return deleted;
  }
}
