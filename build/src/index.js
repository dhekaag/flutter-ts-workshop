"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = http_1.default.createServer(app_1.default);
dotenv_1.default.config();
// ? Mongo Connection
const mongoURI = process.env.MONGO_DB_URI;
if (!mongoURI) {
    console.error("MongoDB URL is not defined");
    process.exit(1);
}
// mongoose.set("strictQuery", true);
mongoose_1.default
    .connect(mongoURI, {})
    .then(() => {
    console.log("MongoDB is connected");
})
    .catch((error) => {
    console.log(error);
});
// ? Start the server
try {
    const port = app_1.default.get("PORT");
    const baseUrl = app_1.default.get("BASE_URL");
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
catch (error) {
    console.log(error);
}
exports.default = server;
