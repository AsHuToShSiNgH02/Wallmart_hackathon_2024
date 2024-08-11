import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import './jobs/priceUpdateJob.js';

dotenv.config();

import passport from 'passport';

import {connect} from './config/db.js';

import { passportAuth } from './config/jwt-middleware.js';

import apiRoutes from './routes/index.js';

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);
app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    await connect();
    console.log('Mongo db connected');

});