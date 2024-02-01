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
exports.deletedUserController = exports.updatedUserController = exports.createUserController = exports.getUserController = void 0;
const user_repository_1 = require("../repositories/user.repository");
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const user = yield (0, user_repository_1.getUserRepo)(userId);
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(500).json({ message: "User not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.getUserController = getUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const success = yield (0, user_repository_1.createUserRepo)(user);
        if (success) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(500).json({ message: "User Not Created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.createUserController = createUserController;
const updatedUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = req.body;
    try {
        const updated = yield (0, user_repository_1.updateUserRepo)(updatedUser.uid, updatedUser);
        if (updated) {
            res.status(200).json({ data: updated });
        }
        else {
            res.status(500).json({ message: "User Not updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.updatedUserController = updatedUserController;
const deletedUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const deleted = yield (0, user_repository_1.deleteUserRepo)(userId);
        if (deleted) {
            res.status(200).json({ data: "User Deleted" });
        }
        else {
            res.status(500).json({ message: "User Not Deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.deletedUserController = deletedUserController;
