import * as express from "express";
import {pingController} from "./controllers/ping";
const cors = require("cors");

const app = express();

app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
  }));
app.use(pingController);

export default app;
