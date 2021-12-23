import mongoose from 'mongoose'

const TransactionDetail = mongoose.Schema({
    room : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Room"
    },
    duration : Number,
    subtotal : Number
});

export default mongoose.model("TransactionDetail",TransactionDetail)