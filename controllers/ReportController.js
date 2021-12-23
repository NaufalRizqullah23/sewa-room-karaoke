import Transaction from "../models/Transaction.js";

export const ReportController = {
    daily : async(req,res) => {
        const result = await Transaction.aggregate([
            {
                $group:{
                    _id:{
                        year:{$year: "$transaction_date"},
                        month: {$month: "$transaction_date"},
                        dayOfMonth: {$dayOfMonth: "$transaction_date"},
                    },
                    value: {$sum: "$total_price"},
                    count: {$sum : 1},
                },
            },
        ])
        res.status(200).json(result)
    },
    weekly : async(req, res) => {
        const result = await Transaction.aggregate([
            {
                $group:{
                    _id:{
                        week: {$week: "$transaction_date"}
                    },
                    value: {$sum: "$total_price"},
                    count: {$sum: 1},
                },
            },
        ])
        res.status(200).json(result)
    },
    monthly : async(req,res) => {
        const result = await Transaction.aggregate([
            {
                $group: {
                    _id: {
                        month : {$month: "$transaction_date"}
                    },
                    value: {$sum: "$total_price"},
                    count: {$sum: 1},
                },
            },
        ])
        res.status(200).json(result)
    },
    yearly: async(req,res) => {
        const result = await Transaction.aggregate([
            {
                $group: {
                    _id:{
                        year: {$year: "$transaction_date"}
                    },
                    value: {$sum: "$total_price"},
                    count: {$sum: 1},
                },
            },
        ])
        res.status(200).json(result)
    },
}