import express from 'express';

import { signup, login } from '../../controllers/authController.js';
import { addCompetitor, getCompetitor } from '../../controllers/competitorController.js';
import { addProduct, getProducts } from '../../controllers/productCotroller.js';

const router = express.Router();

router.post('/products/add/:competitorId', addProduct);
router.get('/products', getProducts);
router.get('/competitors', getCompetitor)
router.post('/competitors/add',addCompetitor);
router.post('/signup', signup);
router.post('/login', login);

export default router;