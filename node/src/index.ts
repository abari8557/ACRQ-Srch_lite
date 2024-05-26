import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import passportRouter from "./routes/passportRoutes";
import authorRouter from "./routes/authorRoutes";
import swaggerUi from "swagger-ui-express";
// import swaggerJsdoc  from "swagger-jsdoc";
import swaggerJson from "./openapi.json";

dotenv.config();

// explicitly specify base-10 for parseInt
const port: number = parseInt(<string>process.env.PORT, 10) || 3000;

const server = express();

server.use(helmet());
server.use(cors());

// server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  res.send(
    "<h1>Hola Jimmy como estas. <br> こんにちは、ジミーお元気ですか <br>नमस्ते जिमी आप कैसी हैं? <br>হ্যালো জিমি কেমন আছেন <br>مرحبا جيمي كيف حالك<h1>"
  );
});
/** Healthcheck */
server.get("/healthcheck", (req, res, next) =>
  res.status(200).json({ message: "How about that? It's alive and kicking!!" })
);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

const connectWithRetry = () => {
  mongoose
    .connect(`${process.env.MONGO_URL}\?authSource=admin`)
    .then(() => console.log("Successfully Connected to MongoDB"))
    .catch((error) => {
      console.log(error);
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();

/** Routes for passport */

server.use("/api/v1/passports", passportRouter);

/** Routes */
server.use("/api/v1/authors", authorRouter);

server.listen(port, () => {
  console.log(`\n*** Server is up and running on port ${port} ***\n`);
});
