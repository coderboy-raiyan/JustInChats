import mongoose from "mongoose";
import config from ".";

async function db() {
  try {
    const mongoURI = config.DB_URI;
    if (!mongoURI) {
      throw new Error("DB connection string not found!");
    }
    const conn = await mongoose.connect(mongoURI);
    console.log("DB is connected to", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default db;
