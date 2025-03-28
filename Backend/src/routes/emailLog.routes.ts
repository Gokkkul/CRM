import { EmailLogController } from "../controllers/emailLog.controller";

const express = require("express");

const router = express.Router();
const emailLogController = new EmailLogController();

router.post('/add-email-log', emailLogController.addEmailLog);
router.delete('/delete-email-log/:id', emailLogController.deleteEmailLog);
router.put('/update-email-log/:id', emailLogController.updateEmailLog);
router.get('/get-email-logs', emailLogController.getEmailLogs);

export { router as emailLogRouter };
