import { configDotenv } from "dotenv";
import path from "path";

configDotenv({ path: path.join(process.cwd(), ".env") });

const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV,
  DB_URI: process.env.DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
};

export default config;
