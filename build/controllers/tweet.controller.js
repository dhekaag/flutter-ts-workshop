"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedTweetController = exports.updatedTweetController = exports.createTweetController = exports.getTweetController = void 0;
const tweet_repository_1 = require("../repositories/tweet.repository");
const getTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        const tweet = yield (0, tweet_repository_1.getTweetRepo)(tweetId);
        if (tweet) {
            res.status(200).json({ data: tweet });
        }
        else {
            res.status(500).json({ message: "Tweet not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.getTweetController = getTweetController;
const createTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.createTweetRepo)(tweet);
        if (success) {
            res.status(200).json({ data: tweet });
        }
        else {
            res.status(500).json({ message: "Tweet Not Created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.createTweetController = createTweetController;
const updatedTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTweet = req.body;
    try {
        const updated = yield (0, tweet_repository_1.updateTweetRepo)(updatedTweet.tweetId, updatedTweet);
        if (updated) {
            res.status(200).json({ data: updated });
        }
        else {
            res.status(500).json({ message: "Tweet Not updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.updatedTweetController = updatedTweetController;
const deletedTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        const deleted = yield (0, tweet_repository_1.deleteTweetRepo)(tweetId);
        if (deleted) {
            res.status(200).json({ data: "Tweet Deleted" });
        }
        else {
            res.status(500).json({ message: "Tweet Not Deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.deletedTweetController = deletedTweetController;
