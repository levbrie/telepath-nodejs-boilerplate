import dotenv from 'dotenv';

dotenv.load();

export default {
	env: 'test',
	db: 'mongodb://localhost/express-mongoose-es6-rest-api-test',
	port: process.env.SERVER_PORT
};
