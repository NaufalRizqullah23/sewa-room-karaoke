import express from "express";
import { transaction_controller } from "../controllers/TransactionController.js";

const TransactionRoutes = express.Router()

//display all Rooms
TransactionRoutes.get('/', transaction_controller.getTransaction)

//display spesific Room
TransactionRoutes.get('/:id', transaction_controller.getTransactionById)

//add a Room
TransactionRoutes.post('/', transaction_controller.addTransaction)

//update a Room
TransactionRoutes.patch('/:id', transaction_controller.updateTransaction)

//delete a Room
TransactionRoutes.delete('/:id', transaction_controller.deleteTransation)

export default TransactionRoutes