import cron from 'node-cron';
import { generateOptimalPrice } from '../controllers/productCotroller.js';
import Product from '../models/product.js';

// Schedule the job to run at midnight every day
cron.schedule('0 0 * * *', async () => {
    try {
        const products = await Product.find().populate('competitor');
        for (let product of products) {
            await generateOptimalPrice({ params: { productId: product._id } }, {});
        }
    } catch (error) {
        console.error('Error running price update job:', error);
    }
});
