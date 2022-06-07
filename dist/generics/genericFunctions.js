"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = void 0;
function cleanObject(doc) {
    let obj = doc;
    delete obj.__v;
    delete obj.createdAt;
    return obj;
}
exports.cleanObject = cleanObject;
//# sourceMappingURL=genericFunctions.js.map