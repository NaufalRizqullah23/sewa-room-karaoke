import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import CustomerRoutes from "./routes/CustomerRoutes.js";
import TransactionRoutes from "./routes/TransactionRoutes.js";
import TransactionDetailRoutes from "./routes/TransactionDetailRoutes.js";
import RoomRoutes from "./routes/RoomRoutes.js";
import ReportRoutes from "./routes/ReportRoutes.js";


mongoose.connect('mongodb://localhost:27017/sewa-karaoke',{
    useNewUrlParser: true,
})

const connection = mongoose.connection

connection.on('error', (e) => console.log(e))
connection.once('open', () => console.log("Connection Success"))

const app = express()

app.use(cors())
app.use(express.json())

app.use('/customers',CustomerRoutes)
app.use('/rooms', RoomRoutes)
app.use('/transactions',TransactionRoutes)
app.use('/transactionDetails',TransactionDetailRoutes)
app.use('/reports',ReportRoutes)
app.listen('3000', () => console.log("Connected of Port 3000"))