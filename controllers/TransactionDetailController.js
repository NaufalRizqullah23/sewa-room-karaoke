import  TransactionDetail from "../models/TransactionDetail.js";

export const transactionDetail_controller = {
//display all TransactionDetail
    getTransactionDetail : async(req,res) => {
    try{
        const transactionDetail = await TransactionDetail.find().populate('room')
        res.json(transactionDetail)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//display specific TransactionDetail
    getTransactionDetailById : async(req,res) =>{
    try{
        const id = req.params.id
        const spec_transactionDetail = await TransactionDetail.findById(id).populate('room')
        res.json(spec_transactionDetail)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//add a TransactionDetail
    addTransactionDetail : async(req,res) =>{
    try{
        const transactionDetail = new TransactionDetail(req.body)
        const transactionDetailSave = await transactionDetail.save()
        res.status(201).json(transactionDetailSave)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//update a TransactionDetail
    updateTransactionDetail : async(req, res) => {
    try{
        const id = req.params.id
        const check = await TransactionDetail.findById(id)
        if(!check) return res.status(401).json({message: "Transaction Detail not found!"})
        const transactionDetailUpdate = await TransactionDetail.updateOne(
            {_id:id},
            {$set: req.body}
        )
        res.status(200).json(transactionDetailUpdate)
    }catch(error){
        res.status(500).json({message:error})
    }
},

//delete a TransactionDetail
    deleteTransationDetail : async(req, res) =>{
    try{
        const id = req.params.id
        const check = await TransactionDetail.findById(id)
        if(!check) return res.status(401).json({message:"Transaction not found"})
        const transactionDetailDelete = await TransactionDetail.deleteOne(
            {_id:id}
        )
        res.status(200).json(transactionDetailDelete)
    }catch(error){
        res.status(500).json({message:error})
    }
}
}