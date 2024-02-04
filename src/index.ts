import http from "http";
import app from "./app";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

const server = http.createServer(app);

dotenv.config();

// ? Mongo Connection

const mongoURI = process.env.MONGO_DB_URI;
if (!mongoURI) {
  console.error("MongoDB URL is not defined");
  process.exit(1);
}
// mongoose.set("strictQuery", true);
mongoose
  .connect(mongoURI, {})
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// ? Start the server
try {
  const port: Number = app.get("PORT");
  const baseUrl: String = app.get("BASE_URL");
  server.listen(port, (): void => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}

export default server;
