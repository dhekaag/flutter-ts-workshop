import { Router } from "express";
import { createUserController, deletedUserController, getUserController, updatedUserController } from "../controllers/user.controller";


const userRouter = Router();

userRouter.get("/:userId", getUserController)
userRouter.post("/", createUserController)
userRouter.delete("/:userId", deletedUserController)
userRouter.put("/", updatedUserController)

export default userRouter;