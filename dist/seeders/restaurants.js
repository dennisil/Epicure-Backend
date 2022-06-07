"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurants = void 0;
const uuid_1 = require("uuid");
exports.restaurants = [
    {
        _id: (0, uuid_1.v4)(),
        chef: "Ran Shmueli",
        resName: "Claro",
        imgUrl: "/imgs/dishes/claro.jpg",
        dishes: [],
        tags: [],
    },
    {
        _id: (0, uuid_1.v4)(),
        chef: "Meir Adoni",
        resName: "Lumina",
        imgUrl: "/imgs/dishes/lumina.jpg",
        dishes: [],
        tags: [],
    },
    {
        _id: (0, uuid_1.v4)(),
        chef: "Yanir Green",
        resName: "Tiger Lily",
        imgUrl: "/imgs/dishes/tiger-lily.jpg",
        dishes: [],
        tags: [],
    },
    {
        _id: (0, uuid_1.v4)(),
        chef: "Yossi Shitrit",
        imgUrl: "/imgs/dishes/onza.jpg",
        resName: "Onza",
        dishes: [],
        tags: [],
    },
];
