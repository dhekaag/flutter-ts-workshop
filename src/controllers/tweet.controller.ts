import {
  getTweetRepo,
  createTweetRepo,
  deleteTweetRepo,
  updateTweetRepo,
} from "../repositories/tweet.repository";
import { ITweetInterface } from "../databases/interfaces/tweet.interface";
import { Request, Response } from "express";

export const getTweetController = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId as string;

  try {
    const tweet = await getTweetRepo(tweetId);
    if (tweet) {
      res.status(200).json({ data: tweet });
    } else {
      res.status(500).json({ message: "Tweet not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const createTweetController = async (req: Request, res: Response) => {
  const tweet: ITweetInterface = req.body;

  try {
    const success = await createTweetRepo(tweet);
    if (success) {
      res.status(200).json({ data: tweet });
    } else {
      res.status(500).json({ message: "Tweet Not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updatedTweetController = async (req: Request, res: Response) => {
  const updatedTweet = req.body;

  try {
    const updated = await updateTweetRepo(updatedTweet.tweetId, updatedTweet);
    if (updated) {
      res.status(200).json({ data: updated });
    } else {
      res.status(500).json({ message: "Tweet Not updated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const deletedTweetController = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId as string;

  try {
    const deleted = await deleteTweetRepo(tweetId);
    if (deleted) {
      res.status(200).json({ data: "Tweet Deleted" });
    } else {
      res.status(500).json({ message: "Tweet Not Deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
