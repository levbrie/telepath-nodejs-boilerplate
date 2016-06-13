import dotenv from 'dotenv';

dotenv.load();

console.log(`SERVER PORT RUNNING ON ${process.env.SERVER_PORT}`);
export default {
  env: 'development',
  db: 'mongodb://localhost/express-mongoose-es6-rest-api-development',
  port: process.env.SERVER_PORT
};
