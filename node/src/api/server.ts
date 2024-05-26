import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
// import { passportRoutes } from "../routes/passportRoutes";
import authorRouter from "../routes/authorRoutes";

dotenv.config();

/**
 * Creates an Express server instance.
 */
const server: Application = express();

server.use(helmet());
server.use(cors());

// server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hola Jimmy como estas. नमस्ते जिमी आप कैसी हैं? হ্যালো জিমি কেমন আছেন<h1>");
});
/** Healthcheck */
server.get("/healthcheck", (req, res, next) =>
  res.status(200).json({ message: "How about that? It's alive and kicking!!" })
);

// const connectWithRetry = () => {
//   mongoose
//     .connect(`${process.env.MONGO_URL}\?authSource=admin`)
//     .then(() => console.log("<h1>Successfully Connected to MongoDB</h1>"))
//     .catch((error) => {
//       console.log(error);
//       setTimeout(connectWithRetry, 5000);
//     });
// };
// connectWithRetry();
//server.use("/api/v1/posts", passportRoutes);

/** Routes */
server.use("/api/v1/authors", authorRouter);



export default server;
