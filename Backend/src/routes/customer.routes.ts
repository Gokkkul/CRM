import { CustomerController } from "../controllers/customer.controller";

const express = require("express");

const router = express.Router();
const customerController = new CustomerController();

router.post('/add-customer', customerController.addCustomer);
router.delete('/delete-customer/:id', customerController.deleteCustomer);
router.put('/update-customer/:id', customerController.updateCustomer);
router.get('/get-customers', customerController.getCustomers);

export { router as customerRouter };
