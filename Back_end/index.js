// import module
import 'dotenv/config'
import express, { json } from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
import { router } from './controller/route.js';
const app = express();



// connect to mongodb
connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connect Succesfully on http://localhost:4000');
    })
    .catch(() => {
        console.log("FAILED CONNECT");
    })


// middleware
app.use(cors({
    origin: ["https://save-data-ps2.vercel.app"],
    credentials: true
}));
app.use(json());
app.use('/api', router);
app.listen(4000);