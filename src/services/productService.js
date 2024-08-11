import { ProductRepository }  from "../repository/index.js";

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async addProduct(data) {
        try {
            const product = await this.productRepository.create(data);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async getProducts(data) {
        try {
            const product = await this.productRepository.getAll(data);
            return product;
        } catch (error) {
            throw error;
        }
    }
    
    async update(id, data) {
        try {
            // Optionally, compute or update the optimal price here
            if (data.currentPrice) {
                data.optimalPrice = await this.computeOptimalPrice(data);
            }
            return await this.productRepository.update(id, data);
        } catch (error) {
            throw error;
        }
    }

    async computeOptimalPrice(product) {
        // Placeholder for optimal price calculation
        // You can use competitor's data to calculate this
        return product.currentPrice; // Temporary placeholder
    }

    async deleteProduct(id){
        try {
            const product = await this.productRepository.delete(id);
            return product;
        } catch (error) {
            throw error
        }
        
    }
}

export default ProductService;