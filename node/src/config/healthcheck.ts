// import { MongoClient, MongoError } from 'mongodb';
import mongoose from 'mongoose';
import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB Health Check
const mongoHealth = async function mongodbHealthCheck(): Promise<boolean> {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}\?authSource=admin`);
    await mongoose.connection.close();
    return true;
  } catch (err) {
    console.error('MongoDB Health Check Failed', err);
    return false;
  }
};

// RabbitMQ Health Check
const rabbitURL = process.env.RABBITMQ_URL || 'amqp://localhost';
const rabbitHealth = async function rabbitMqHealthCheck(): Promise<boolean> {
  try {
    const conn = await amqp.connect(rabbitURL);
    const ch = await conn.createChannel();
    await ch.assertQueue('health_check');
    await ch.close();
    await conn.close();
    return true;
  } catch (err) {
    console.error('RabbitMQ Health Check Failed', err);
    return false;
  }
};

export default { mongoHealth, rabbitHealth };
