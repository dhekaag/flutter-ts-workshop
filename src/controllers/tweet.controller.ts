import {
  getTweetRepo,
  createTweetRepo,
  deleteTweetRepo,
  updateTweetRepo,
  getAllTweetRepo,
} from "../repositories/tweet.repository";
import { ITweetInterface } from "../databases/interfaces/tweet.interface";
import { Request, Response } from "express";
import {
  updateUserWithDeleteTweetIdRepo,
  updateUserWithTweetIdRepo,
} from "../repositories/user.repository";

export const getAllTweetController = async (req: Request, res: Response) => {
  try {
    const tweet = await getAllTweetRepo();
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
      const userUpdateSucces = await updateUserWithTweetIdRepo(
        tweet.adminId,
        tweet.tweetId
      );

      if (userUpdateSucces) {
        res.status(200).json({ data: tweet });
      } else {
        res.status(500).json({ message: "User Not Updated" });
      }
    } else {
      res.status(500).json({ message: "Tweet Not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updatedTweetController = async (req: Request, res: Response) => {
  const updatedTweet: ITweetInterface = req.body;

  try {
    const updated = await updateTweetRepo(updatedTweet.tweetId, updatedTweet);
    if (updated) {
      res.status(200).json({ data: "Tweet updated" });
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
      const updateUserSuccess = await updateUserWithDeleteTweetIdRepo(tweetId);
      if (updateUserSuccess) {
        res.status(200).json({ data: "Tweet Deleted" });
      } else {
        res.status(500).json({ message: "User Not Updated" });
      }
    } else {
      res.status(500).json({ message: "Tweet Not Deleted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
