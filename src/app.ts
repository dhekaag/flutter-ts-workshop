import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes";

const app: Express = express();

// ? Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");

// ? Define the routes
app.use("/", router);

export default app;
