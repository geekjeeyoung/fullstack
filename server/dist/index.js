"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
require("dotenv-safe/config");
const Post_1 = require("./entities/Post");
const User_1 = require("./entities/User");
const Upvote_1 = require("./entities/Upvote");
const main = async () => {
    const conn = await typeorm_1.createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
        entities: [Post_1.Post, User_1.User, Upvote_1.Upvote],
    });
    const app = express_1.default();
    app.listen(parseInt(process.env.PORT), () => {
        console.log("server started on localhost:%d", process.env.PORT);
    });
};
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map