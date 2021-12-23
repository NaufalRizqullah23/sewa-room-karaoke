import express from "express";
import { customer_controller } from "../controllers/CustomerController.js";
const CustomerRoutes = express.Router()

//display all Customer
CustomerRoutes.get('/', customer_controller.getCustomer)

//display spesific Customer
CustomerRoutes.get('/:id', customer_controller.getCustomerById)

//add a Customer
CustomerRoutes.post('/', customer_controller.addCustomer)

//update a Customer
CustomerRoutes.patch('/:id', customer_controller.updateCustomer)

//delete a Customer
CustomerRoutes.delete('/:id', customer_controller.deleteCustomer)

export default CustomerRoutes