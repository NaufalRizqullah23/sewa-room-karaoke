import express from "express";
import { room_controller } from "../controllers/RoomController.js";

const RoomRoutes = express.Router()

//display all Rooms
RoomRoutes.get('/', room_controller.getRoom)

//display spesific Room
RoomRoutes.get('/:id', room_controller.getRoomById)

//add a Room
RoomRoutes.post('/', room_controller.addRoom)

//update a Room
RoomRoutes.patch('/:id', room_controller.updateRoom)

//delete a Room
RoomRoutes.delete('/:id', room_controller.deleteRoom)

export default RoomRoutes