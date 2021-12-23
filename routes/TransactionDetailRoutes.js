import express from "express";
import { transactionDetail_controller } from "../controllers/TransactionDetailController.js";

const TransactionDetailRoutes = express.Router()

//display all Rooms
TransactionDetailRoutes.get('/', transactionDetail_controller.getTransactionDetail)

//display spesific Room
TransactionDetailRoutes.get('/:id', transactionDetail_controller.getTransactionDetailById)

//add a Room
TransactionDetailRoutes.post('/', transactionDetail_controller.addTransactionDetail)

//update a Room
TransactionDetailRoutes.patch('/:id', transactionDetail_controller.updateTransactionDetail)

//delete a Room
TransactionDetailRoutes.delete('/:id', transactionDetail_controller.deleteTransationDetail)

export default TransactionDetailRoutes