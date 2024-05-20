
import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();
// explicitly specify base-10 for parseInt
const  port: number = parseInt(<string>process.env.PORT, 10) || 3000;

const server: Application = express();
server.listen(port);
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (req:Request, res:Response) => {
  res.send('<h1>Hola Jorge!!! como estas<h1>')
});

console.log(`Server is up and running on port ${port}`);