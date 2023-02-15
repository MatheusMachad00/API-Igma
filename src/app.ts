import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from './routers/index';

dotenv.config();
const app = express();
app.use(cors(), express.json());
app.use(router);

export default app;