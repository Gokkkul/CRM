import { LeadController } from "../controllers/lead.controller";

const express = require("express");

const router = express.Router();
const leadController = new LeadController();

router.post('/add-lead', leadController.addLead);
router.delete('/delete-lead/:id', leadController.deleteLead);
router.put('/update-lead/:id', leadController.updateLead);
router.get('/get-leads', leadController.getLeads);

export { router as leadRouter };
