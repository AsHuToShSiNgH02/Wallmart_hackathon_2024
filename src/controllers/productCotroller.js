import ProductService from "../services/productService.js";
import Product from "../models/product.js";
import scrapeCompetitorPrice from '../services/scrappingService.js'
import calculateOptimalPrice from '../utils/algorithm.js'
import mongoose from 'mongoose';

const productService = new ProductService();

export const addProduct = async (req, res) => {
    try {
        const { competitorId } = req.params;
        const productData = {
            ...req.body,
            competitor: competitorId
        };
        const product = await productService.addProduct(productData);
        return res.status(201).json({
            success: true,
            message: 'Product added successfully',
            data:product,
            err: {}
        });
    }catch(error){
        return res.status(500).json({
            success: true,
            message: 'Product not added',
            data: {},
            err: error
        })
    }
}



export const getProducts = async (req, res) => {
    try{
        const product = await productService.getProducts(req.body);
        return res.status(201).json({
            success: true,
            message: 'Product fetched successfully',
            data:product,
            err: {}
        });
    }catch(error){
        return res.status(500).json({
            success: true,
            message: 'Product not fetched',
            data: {},
            err: error
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: 'Product fetched successfully',
            data:product,
            err: {}
        });
    }catch(error){
        return res.status(500).json({
            success: true,
            message: 'Product not updated',
            data: {},
            err: error
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await productService.deleteProduct(id);
        
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully',
                data: {},
                err: {}
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
                data: {},
                err: {}
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to delete Product',
            data: {},
            err: error
        });
    }
}

export const generateOptimalPrice = async (req, res) => {
    try {
        const { productId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const product = await Product.findById(productId).populate('competitor');

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        
        const competitorPrice = await scrapeCompetitorPrice(product.productUrlPage);
        const currentPrice = product.currentPrice;

        const optimalPrice = calculateOptimalPrice(currentPrice, competitorPrice, product.salesLastMonth, product.inventory);


        product.optimalPrice = optimalPrice;
        await product.save();

        res.status(200).json({ message: 'Optimal price calculated', optimalPrice });
    } catch (error) {
        console.error('Error generating optimal price:', error);
        res.status(500).json({ error: 'Server error' });
    }
};



