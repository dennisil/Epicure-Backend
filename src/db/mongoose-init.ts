import mongoose from "mongoose";
import db from "../../models";
import { v4 as UUIDV4 } from "uuid";

const dbURI =
  "mongodb+srv://dennis:12345@dennis-epicure.vr0ae.mongodb.net/epicure?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

let mongoDb = mongoose.connection;
mongoDb.once("open", async () => {
  // pushFromMongoToSql(mongoDb);
});

async function pushFromMongoToSql(mongoDb: any) {
  mongoDb.collections;
  let collections = mongoDb.collections;
  for (const i in collections) {
    let res = collections[i].find({});
    try {
      let collecion = await res.toArray();
      collecion.forEach(async (doc: any) => {
        doc._id = UUIDV4();
        if (doc.__v) delete doc.__v;
        await db[i].create(doc);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
