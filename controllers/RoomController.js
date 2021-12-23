import  Room  from "../models/Room.js";

export const room_controller = {
//display all Rooms
    getRoom : async(req,res) => {
    try{
        const room = await Room.find();
        res.json(room)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//display specific Room
    getRoomById : async(req,res) =>{
    try{
        const id = req.params.id
        const spec_room = await Room.findById(id)
        res.json(spec_room)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//add a Room
    addRoom : async(req,res) =>{
    try{
        const room = new Room(req.body)
        const roomSave = await room.save()
        res.status(201).json(roomSave)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//update a Room
    updateRoom : async(req, res) => {
    try{
        const id = req.params.id
        const check = await Room.findById(id)
        if(!check) return res.status(401).json({message: "Room not found!"})
        const roomUpdate = await Room.updateOne(
            {_id:id},
            {$set: req.body}
        )
        res.status(200).json(roomUpdate)
    }catch(error){
        res.status(500).json({message:error})
    }
},

//delete a Room
    deleteRoom : async(req, res) =>{
    try{
        const id = req.params.id
        const check = await Room.findById(id)
        if(!check) return res.status(401).json({message:"Room not found"})
        const roomDelete = await Room.deleteOne(
            {_id:id}
        )
        res.status(200).json(roomDelete)
    }catch(error){
        res.status(500).json({message:error})
    }
}
}