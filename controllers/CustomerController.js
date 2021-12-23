import Customer from "../models/Customer.js";

export const customer_controller = {
//display all Customers
    getCustomer : async(req,res) => {
    try{
        const customer = await Customer.find();
        res.json(customer)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//display specific Customer
    getCustomerById : async(req,res) =>{
    try{
        const id = req.params.id
        const spec_customer = await Customer.findById(id)
        res.json(spec_customer)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//add a Customer
    addCustomer : async(req,res) =>{
    try{
        const customer = new Customer(req.body)
        const customerSave = await customer.save()
        res.status(201).json(customerSave)
    } catch(error){
        res.status(500).json({message:error})
    }
},

//update a Customer
    updateCustomer : async(req, res) => {
    try{
        const id = req.params.id
        const check = await Customer.findById(id)
        if(!check) return res.status(401).json({message: "Customer not found!"})
        const customerUpdate = await Customer.updateOne(
            {_id:id},
            {$set: req.body}
        )
        res.status(200).json(customerUpdate)
    }catch(error){
        res.status(500).json({message:error})
    }
},

//delete a customer
    deleteCustomer : async(req, res) =>{
    try{
        const id = req.params.id
        const check = await Customer.findById(id)
        if(!check) return res.status(401).json({message:"Customer not found"})
        const customerDelete = await Customer.deleteOne(
            {_id:id}
        )
        res.status(200).json(customerDelete)
    }catch(error){
        res.status(500).json({message:error})
    }
}
}