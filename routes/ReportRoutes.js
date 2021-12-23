import express from "express";
import { ReportController } from "../controllers/ReportController.js";

const ReportRoutes = express.Router()

//report per day
ReportRoutes.get('/daily',ReportController.daily)

//report per week
ReportRoutes.get('/weekly',ReportController.weekly)

//report per month
ReportRoutes.get('/monthly',ReportController.monthly)

//report per year
ReportRoutes.get('/yearly',ReportController.yearly)

export default ReportRoutes