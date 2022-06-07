"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
class Authenticator {
    static authUser(req, res, next) {
        const token = req.headers["x-access-token"];
        if (!token)
            res.send("No Token Provided");
        else {
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    res
                        .status(403)
                        .json({ auth: false, message: "You failed to authenticate" });
                }
                else {
                    req.body.isUserAdmin = decoded.user.isAdmin;
                    next();
                }
            });
        }
    }
    static IsUserAdmin(req, res, next) {
        if (req.body && req.body.isUserAdmin) {
            console.log("admin");
            next();
        }
        else {
            res.status(403).json("Only an admin can do this");
        }
    }
}
exports.Authenticator = Authenticator;
