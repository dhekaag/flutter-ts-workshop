import {Document} from "mongoose"

export interface IUserInterface extends Document {
    uid: string,
    tweets: string[],
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt: Date,
}