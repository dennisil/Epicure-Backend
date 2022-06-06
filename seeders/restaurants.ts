import { v4 as UUIDV4 } from "uuid";
export const restaurants = [
  {
    _id: UUIDV4(),
    chef: "Ran Shmueli",
    resName: "Claro",
    imgUrl: "/imgs/dishes/claro.jpg",
    dishes: [],
    tags: [],
  },
  {
    _id: UUIDV4(),
    chef: "Meir Adoni",
    resName: "Lumina",
    imgUrl: "/imgs/dishes/lumina.jpg",
    dishes: [],
    tags: [],
  },
  {
    _id: UUIDV4(),
    chef: "Yanir Green",
    resName: "Tiger Lily",
    imgUrl: "/imgs/dishes/tiger-lily.jpg",
    dishes: [],
    tags: [],
  },
  {
    _id: UUIDV4(),
    chef: "Yossi Shitrit",
    imgUrl: "/imgs/dishes/onza.jpg",
    resName: "Onza",
    dishes: [],
    tags: [],
  },
];
