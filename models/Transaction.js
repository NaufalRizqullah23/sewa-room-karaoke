import mongoose from 'mongoose'

const Transaction = mongoose.Schema({
    transaction_id : Number,
    transaction_date : Date,
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer"
    },
    transactionDetail : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "TransactionDetail"
        }
    ],
    total_price : Number
})

export default mongoose.model("Transaction",Transaction)