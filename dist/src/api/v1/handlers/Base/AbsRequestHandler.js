"use strict";
// import { Result } from "../../entities/Result";
// import { ErrorMsgs } from "../../entities/Errors/ErrorMsgs";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsRequestHandler = void 0;
class AbsRequestHandler {
    HandleRequest(reqData, handle, buildResult) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
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
