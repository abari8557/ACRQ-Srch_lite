import server from './api/server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// explicitly specify base-10 for parseInt
const port: number = parseInt(<string>process.env.PORT, 10) || 3000;

const connectWithRetry = () => {
  mongoose
    .connect(`${process.env.MONGO_URL}\?authSource=admin`)
    // .connect(configMongoDB.mongo.url)  //this is not working
    .then(() => console.log('Successfully Connected to MongoDB1'))
    .catch((error) => {
      console.log(error.message);
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();

server.listen(port, () => {
  console.log(`\n*** Server is up and running on port ${port} ***\n`);
});
