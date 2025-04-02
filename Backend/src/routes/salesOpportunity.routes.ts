import { SalesOpportunityController } from "../controllers/salesOpportunity.controller";

const express = require("express");

const router = express.Router();
const salesOpportunityController = new SalesOpportunityController();

router.post('/add-sales-opportunity', salesOpportunityController.addSalesOpportunity);
router.delete('/delete-sales-opportunity/:id', salesOpportunityController.deleteSalesOpportunity);
router.put('/update-sales-opportunity/:id', salesOpportunityController.updateSalesOpportunity);
router.get('/get-sales-opportunities', salesOpportunityController.getSalesOpportunities);
router.get('/kanban', salesOpportunityController.getOpportunitiesByStage);
router.put('/:id/stage')

export { router as salesOpportunityRouter };
