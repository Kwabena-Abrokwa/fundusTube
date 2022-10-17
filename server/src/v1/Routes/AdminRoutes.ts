import express from "express";
import { createAdminAccount, loginAdmin } from "../Controllers/AdminController";

const router = express.Router();

router.post("/loginAdmin", loginAdmin);
router.post("/create-admin-account", createAdminAccount);

export default router;
