"use strict";
// import { Result } from "../../entities/Result";
// import { ErrorMsgs } from "../../entities/Errors/ErrorMsgs";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsRequestHandler = void 0;
class AbsRequestHandler {
    async HandleRequest(reqData, handle, buildResult) {
        // let result = new Result();
        // try {
        //     let res = await handle(reqData);
        //     if (!res) {
        //         throw new ErrorMsgs('Internal error occured while handling Request');
        //     }
        //     result.result = buildResult(res);
        //     return result;
        // } catch (error) {
        //     return this.buildErrorResult(error.message || error);
        // }
    }
    //------------------------------------------- RESULT BUILDERS ----------------------------------------------------
    buildResult(resultData) {
        const result = Object.assign({}, resultData);
        return result;
    }
    buildPageDataResult(resultData) {
        let result = { page_data: resultData.pageData };
        return result;
    }
}
exports.AbsRequestHandler = AbsRequestHandler;
//# sourceMappingURL=AbsRequestHandler.js.map