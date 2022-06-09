import mongoose from "mongoose";
import { v4 as UUIDV4 } from "uuid";
require("dotenv").config();
const DB_PASSWORD = process.env.MONGO_PASS;
const DB_USER = process.env.MONGO_USER;
const DB_DATABASE = process.env.MONGO_DB;

const dbURI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_DATABASE}.vr0ae.mongodb.net/epicure?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

let mongoDb = mongoose.connection;
mongoDb.once("open", async () => {
  // pushFromMongoToSql(mongoDb);
});

// async function pushFromMongoToSql(mongoDb: any) {
//   mongoDb.collections;
//   let collections = mongoDb.collections;
//   for (const i in collections) {
//     let res = collections[i].find({});
//     try {
//       let collecion = await res.toArray();
//       collecion.forEach(async (doc: any) => {
//         doc._id = UUIDV4();
//         if (doc.__v) delete doc.__v;
//         await db[i].create(doc);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
