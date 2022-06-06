import { Controller } from "../../../../generics/base.controller";

abstract class AbsController extends Controller {
  /**
   * ServeRequest
   * Base request serving flow
   *
   * @param {any} req request
   * @param {any} res response
   * @param {any} serveData Data needed to serve request
   *
   * @returns {Response}
   */

  protected _buildCriteria(query: any) {
    let criteria = {};
    let txtCriteria: any;
    if (query) {
      txtCriteria = { ...query };
      const excludedFields = ["page", "sort", "limit", "fields", "skip"];
      excludedFields.forEach((el) => delete txtCriteria[el]);
      let queryStr = JSON.stringify(txtCriteria);
      queryStr = queryStr.replace(
        /\b(gte|gt|lte|lt)\b/g,
        (match) => `$${match}`
      );
      txtCriteria = JSON.parse(queryStr);
    }
    if (query.page) {
      var page = query.page;
    }
    if (query.skip) {
      var offset = query.skip;
      // console.log('offset', offset)
    }
    if (query.limit) {
      var limit = query.limit;
    } else {
      limit = 10;
    }
    // offset = 2
    offset = parseInt(offset) || undefined
    limit = parseInt(limit)
    criteria = { txtCriteria, page, limit, offset };
    console.log('criteria', criteria)
    return criteria;
  }

  // ------------------------------------------------- RESPONSE BUILDERS ----------------------------------------------------

  /**
   * Build General Response from result
   * Structure: {Data, Success, Error}
   *
   * @param {any} res response
   *
   * @returns {any}  : General Response
   */
  public BuildResponse(res: any, result: any): void {
    res.Data = result.Data;
    res.Success = result.Success;
    res.Error = result.Error;
  }
}

export default AbsController;
