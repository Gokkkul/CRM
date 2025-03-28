import { ReportController } from "../controllers/report.controller";

const express = require("express");

const router = express.Router();
const reportController = new ReportController();

router.post('/add-report', reportController.addReport);
router.delete('/delete-report/:id', reportController.deleteReport);
router.put('/update-report/:id', reportController.updateReport);
router.get('/get-reports', reportController.getReports);

export { router as reportRouter };
