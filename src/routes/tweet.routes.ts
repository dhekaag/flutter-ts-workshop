import { Router } from "express";
import {
  createTweetController,
  deletedTweetController,
  getAllTweetController,
  getTweetController,
  updatedTweetController,
} from "../controllers/tweet.controller";

const tweetRouter = Router();

tweetRouter.get("/:tweetId", getTweetController);
tweetRouter.get("/", getAllTweetController);
tweetRouter.post("/", createTweetController);
tweetRouter.delete("/:tweetId", deletedTweetController);
tweetRouter.put("/", updatedTweetController);

export default tweetRouter;
