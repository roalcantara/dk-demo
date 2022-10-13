import express from 'express';
import cors from 'cors';
import { taskRoutes } from '../../routes';

const HOST = process.env.HOST ?? "localhost";
const PORT = process.env.PORT ?? 3001;
const corsOptions = {
  origin: '*'
}

export const setup = () =>
  express()
    .use(cors(corsOptions))
    .use(express.json()) // parse requests of content-type - application/json
    .use(express.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
    .get('/api', (_, res) => res.json({ message: 'Welcome to Tasks' })) // simple route
    .use('/api/tasks', taskRoutes)
    .listen(PORT, () => console.log(`Server is running on port ${HOST}:${PORT}.`)) // set port, listen for requests