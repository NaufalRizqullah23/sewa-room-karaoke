import mongoose from 'mongoose'

const Customer = mongoose.Schema({
    name : String,
    email : String,
    phone_number : String,
})

export default mongoose.model("Customer",Customer)