import mongoose from 'mongoose'

const Transaction = mongoose.Schema({
    transaction_id : Number,
    transaction_date : Date,
    total_price : Number,
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer"
    },
    transactionDetail : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "TransactionDetail"
        }
    ]
})

export default mongoose.model("Transaction",Transaction)