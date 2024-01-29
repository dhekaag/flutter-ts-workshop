import express, { Express } from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes";
import dotenv from "dotenv"
import mongoose from "mongoose"


const app: Express = express();
const server = http.createServer(app);

dotenv.config();

// ? Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");

// ? Define the routes
app.use("/api/v1", router)

// ? Mongo Connection
const mongoURI = process.env.MONGO_DB_URI
if (!mongoURI) {
    console.error("MongoDB URL is not defined");
    process.exit(1);
}
mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, {}).then(()=> {
    console.log("MongoDB is connected");
}).catch((error) => {
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
 

