import http from "http";
import dns from "node:dns/promises";
import app from "./app";
import config from "./config";
import db from "./config/db";

const PORT = config.PORT;
const server = http.createServer(app);
// [ '127.0.0.53' ]
async function bootstrap() {
  try {
    dns.setServers(["1.1.1.1"]);
    await db();
    server.listen(PORT, () => {
      console.log("Server is listening on PORT", PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

bootstrap();
