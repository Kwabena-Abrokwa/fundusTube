import express from "express";
import { createUserAccount, loginUser } from "../Controllers/UsersController";

const router = express.Router();

router.post("/login", loginUser);
router.post("/create-account", createUserAccount);

export default router;
