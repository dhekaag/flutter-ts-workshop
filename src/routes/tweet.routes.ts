import { Router } from "express";
import {
  createTweetController,
  deletedTweetController,
  getTweetController,
  updatedTweetController,
} from "../controllers/tweet.controller";

const tweetRouter = Router();

tweetRouter.get("/:tweetId", getTweetController);
// tweetRouter.get("/", (req, res) => {getAllTweetsController})
tweetRouter.post("/", createTweetController);
tweetRouter.delete("/:tweetId", deletedTweetController);
tweetRouter.put("/", updatedTweetController);

export default tweetRouter;
