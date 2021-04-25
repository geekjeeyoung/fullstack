import session from "express-session";
import { Request, Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
  req: Request & {
    session: session.Session &
      Partial<session.SessionData> & { userId: number };
  };
  redis: Redis;
  res: Response;
};
