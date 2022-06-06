import { v4 as UUIDV4 } from "uuid";
export const users = [
  {
    _id: UUIDV4(),
    userName: "first",
    password: "1234",
    email: "first@gmail.com",
    isAdmin: true,
  },
  {
    _id: UUIDV4(),
    userName: "second",
    password: "1234",
    email: "second@gmail.com",
    isAdmin: false,
  },
];
