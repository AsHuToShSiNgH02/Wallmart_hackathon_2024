import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    optimalPrice: {
        type:Number,
        default: 100
    },
    inventory: {
        type: String,
        required: true
    },
    salesLastMonth: {
        type: Number,
        default: 0
    },
    productUrlPage: {
        type: String,
        required: true,
        unique: true
    },
    competitor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Competitor',
        required: true,
    },
},{timestamps: true});

const Product = mongoose.model('Product', productSchema);
export default Product;