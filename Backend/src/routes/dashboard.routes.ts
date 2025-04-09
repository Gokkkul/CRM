import { DashboardController } from "../controllers/dashboard.controller";

const express = require('express');
const router = express.Router();
const dashboardController = new DashboardController();

router.get('/getTotalValue', dashboardController.getTotalValue);

export { router as dashboardRouter };