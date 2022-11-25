import express, { json, urlencoded } from 'express';
import cors from 'cors';
import {
  API_ENDPOINT,
  CLIENT_ADDRESS,
  CLIENT_PORT,
} from 'shared/config.js';
import routes from './routes/index.js';

const app = express();

app.use(cors({ origin: `http://${CLIENT_ADDRESS}:${CLIENT_PORT}` }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(API_ENDPOINT, routes);

export default app;
