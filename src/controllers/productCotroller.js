import ProductService from "../services/productService.js";

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



