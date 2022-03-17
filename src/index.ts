/*
App Imports
*/

import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import itemRouter from './routes/items';

/*
App Variables
*/

dotenv.config();

const PORT: Number = parseInt(process.env.PORT as string, 10);
const app: Application = express();

/*
App Middlewares configuration
*/

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
Using routes
*/

app.use('/menu/item', itemRouter);

/*
App running phase
*/

app.listen(PORT || 3000, ()=>{
    console.log('[Server] Server running on port', PORT);
});

app.on('error', (err)=>{
    console.log('[Server Error] An error occurred while running server:', err)
});