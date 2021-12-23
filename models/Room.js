import mongoose from 'mongoose'

const Room = mongoose.Schema({
    room_number : Number,
    room_name : String,
    price : Number,
})

export default mongoose.model("Room",Room)