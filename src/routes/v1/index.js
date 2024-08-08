import express from 'express';

import { signup, login } from '../../controllers/authController.js';
import { addCompetitor, getCompetitor } from '../../controllers/competitorController.js';

const router = express.Router();

router.get('/competitors', getCompetitor)
router.post('/competitors',addCompetitor);
router.post('/signup', signup);
router.post('/login', login);

export default router;