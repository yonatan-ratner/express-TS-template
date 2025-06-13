import { Router } from "express";
import homeController from "../controllers/homepage.controller";

const router = Router();

/**
 * Serves the home page.
 */
router.get("/", homeController.serve);

export default router;
