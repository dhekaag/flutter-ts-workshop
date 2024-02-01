import {
  getUserRepo,
  createUserRepo,
  deleteUserRepo,
  updateUserRepo,
} from "../repositories/user.repository";
import { IUserInterface } from "../databases/interfaces/user.interface";
import { Request, Response } from "express";

export const getUserController = async (req: Request, res: Response) => {
  const userId = req.query.userId as string;

  try {
    const user = await getUserRepo(userId);
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(500).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const user: IUserInterface = req.body;

  try {
    const success = await createUserRepo(user);
    if (success) {
      res.status(200).json({ data: user });
    } else {
      res.status(500).json({ message: "User Not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updatedUserController = async (req: Request, res: Response) => {
  const updatedUser = req.body;

  try {
    const updated = await updateUserRepo(updatedUser.uid, updatedUser);
    if (updated) {
      res.status(200).json({ data: updated });
    } else {
      res.status(500).json({ message: "User Not updated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const deletedUserController = async (req: Request, res: Response) => {
  const userId = req.query.userId as string;

  try {
    const deleted = await deleteUserRepo(userId);
    if (deleted) {
      res.status(200).json({ data: "User Deleted" });
    } else {
      res.status(500).json({ message: "User Not Deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
