import mongoose,{ Document, Schema } from "mongoose";
import { ITweetInterface } from "../interfaces/tweet.interface";

const tweetSchema = new Schema<ITweetInterface>({
    tweetId: {type: String, required:true},
    content: {type: String, default:""},
    createdAt: {type: Date, required:true},
    adminId: {type: String, required:true}
})

const tweetModel = mongoose.model<ITweetInterface>("TweetModel", tweetSchema)

export default tweetModel;