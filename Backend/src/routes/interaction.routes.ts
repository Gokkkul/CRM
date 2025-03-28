import { InteractionController } from "../controllers/interaction.controller";

const express = require("express");

const router = express.Router();
const interactionController = new InteractionController();

router.post('/add-interaction', interactionController.addInteraction);
router.delete('/delete-interaction/:id', interactionController.deleteInteraction);
router.put('/update-interaction/:id', interactionController.updateInteraction);
router.get('/get-interactions', interactionController.getInteractions);

export { router as interactionRouter };
