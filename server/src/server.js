import http from "http";
import app from "./app";
import config from "./config";

const PORT = config.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});
