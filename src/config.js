import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.ENV || 'dev',
  server: {
    host: process.env.API_HOST || 'localhost',
    port: process.env.API_PORT || 8080,
    routePrefix: process.env.ROUTE_PREFIX || 'api',
    routes: {
      cors: true,
    },
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'booking',
    dialect: 'mysql',
  },
  swagger: {
    info: { title: 'API Documentation' },
    jsonPath: '/api/documentation.json',
    documentationPath: '/api/documentation',
    swaggerUIPath: '/api/documentation',
    schemes: ['http'],
    grouping: 'tags',
    host: `${process.env.API_HOST}:${process.env.API_PORT}`,
  },
};

Object.freeze(config);

export default config;
