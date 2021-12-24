import Transaction from "../models/Transaction.js"
import TransactionDetail from "../models/TransactionDetail.js";

export const transaction_controller = {
//display all Transaction
    getTransaction : async(req,res) => {
    try{
        const transaction = await Transaction.find().populate('customer').populate({
            path : 'transactionDetail',
            populate : {
                path : 'room',
                model : 'Room'
            }
        });
        res.json(transaction)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//display specific Transaction
    getTransactionById : async(req,res) =>{
    try{
        const id = req.params.id
        const spec_transaction = await Transaction.findById(id).populate('customer').populate({
            path : 'transactionDetail',
            populate : {
                path : 'room',
                model : 'Room'
            }
        })
        res.json(spec_transaction)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//add a Transaction
    addTransaction : async(req,res) =>{
    try{
        await TransactionDetail.insertMany(req.body.TransactionDetail).then(async(items) =>{
        const transactionId = []
        items.map((item) => {
            transactionId.push(item.id)
        })
        const transaction = new Transaction({
            transaction_id: req.body.transaction_id,
            transaction_date: new Date(),
            customer: req.body.customer,
            transactionDetail : transactionId,
            total_price: req.body.total_price
        })
        await transaction.save()
        res.status(201).json({message:"Add transaction successful",data: transaction})
    }) }catch(error){
        res.status(500).json({message:error})
    }
},

//update a Transaction
    updateTransaction : async(req, res) => {
    try{
        const id = req.params.id
        const check = await Transaction.findById(id)
        if(!check) return res.status(401).json({message: "Transaction not found!"})
        const transactionUpdate = await Transaction.updateOne(
            {_id:id},
            {$set: req.body}
        )
        res.status(200).json(transactionUpdate)
    }catch(error){
        res.status(500).json({message:error})
    }
},

//delete a Transaction
    deleteTransation : async(req, res) =>{
    try{
        const id = req.params.id
        const check = await Transaction.findById(id)
        if(!check) return res.status(401).json({message:"Transaction not found"})
        const transactionDelete = await Transaction.deleteOne(
            {_id:id}
        )
        res.status(200).json(transactionDelete)
    }catch(error){
        res.status(500).json({message:error})
    }
}
}