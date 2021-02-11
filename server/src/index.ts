import express from "express";
import path from "path";
import { createConnection } from "typeorm";
import "dotenv-safe/config";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { Upvote } from "./entities/Upvote";
import connectRedis from "connect-redis";
import session from "express-session";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    // synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    cli: {
      migrationsDir: "src/migrations",
    },
    entities: [Post, User, Upvote],
  });

  // await conn.runMigrations();

  const app = express();

  const RedisStore = connectRedis(session);

  app.listen(parseInt(process.env.PORT), () => {
    console.log("server started on localhost:%d", process.env.PORT);
  });
};

main().catch((err) => {
  console.log(err);
});
