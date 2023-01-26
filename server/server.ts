import fastify from 'fastify';
import { config } from 'dotenv';

config();

const app = fastify();

console.log('Hi')

app.listen({ port: parseInt(process.env.PORT!) })
