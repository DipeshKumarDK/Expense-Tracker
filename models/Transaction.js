const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    id:{
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
    },
    type: {
        type: String,
        default:"expense",
        required:true
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('Transaction', TransactionSchema)