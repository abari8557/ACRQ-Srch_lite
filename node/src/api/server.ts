import express, { Request, Response, NextFunction } from 'express';
//import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import passportRouter from '../routes/passportRoutes';
import authorRouter from '../routes/authorRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from '../openapi.json';
import healthcheck from '../config/healthcheck';

dotenv.config();

/**
 * Creates an Express server instance.
 */

const server = express();

server.use(helmet());
server.use(cors());

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  res.send(
    '<h1>Hola Jimmy como estas. <br> こんにちは、ジミーお元気ですか <br>नमस्ते जिमी आप कैसी हैं? <br>হ্যালো জিমি কেমন আছেন <br>مرحبا جيمي كيف حالك<h1>'
  );
});

/**
 * Healthcheck MongoDB and RabbitMQ
 */

server.get('/api/v1/healthcheck', async (req, res) => {
  const mongodbStatus = await healthcheck.mongoHealth();
  const rabbitmqStatus = await healthcheck.rabbitHealth();
  res.json({
    mongodb: mongodbStatus ? 'healthy' : 'down',
    rabbitmq: rabbitmqStatus ? 'healthy' : 'down',
  });
});

/** Swagger API Documentation */
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

/** Routes for passport */
server.use('/api/v1/passports', passportRouter);

/** Routes for author */
server.use('/api/v1/authors', authorRouter);

export default server;
