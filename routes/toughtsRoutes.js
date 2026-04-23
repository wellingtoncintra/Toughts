import express from "express";
import ToughtController from "../controllers/ToughtController.js";
import { checkAuth } from "../helpers/auth.js";

const router = express.Router();

router.get("/add", checkAuth, ToughtController.createTought);
router.post("/add", checkAuth, ToughtController.createToughtSave);
router.post("/remove", checkAuth, ToughtController.removeTought);
router.get("/edit/:id", checkAuth, ToughtController.updateTought);
router.post("/edit", checkAuth, ToughtController.updateToughtPost);
router.get("/dashboard", checkAuth, ToughtController.dashboard);
router.get("/", ToughtController.showToughts);

export default router;