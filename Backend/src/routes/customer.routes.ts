import { CustomerController } from "../controllers/customer.controller";
import { roleBased } from "../middleware/authRole.middleware";

const express = require("express");

const router = express.Router();
const customerController = new CustomerController();


// router.use(roleBased(['admin'])) // Applies role based authentication to all the routes
// router.post('/add-customer', roleBased(['admin']), customerController.addCustomer);
router.post('/add-customer', customerController.addCustomer);
router.delete('/delete-customer/:id', customerController.deleteCustomer);
router.put('/update-customer/:id', customerController.updateCustomer);
router.get('/get-customers', customerController.getCustomers);

export { router as customerRouter };
