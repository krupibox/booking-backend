import hapi from '@hapi/hapi';
import lodash from 'lodash';

import initPlugins from './plugins.js';
import initRoutes from './routes.js';

const { Server } = hapi;

class ApiServer extends Server {
  constructor(config) {
    const serverOptions = {
      app: config,
      port: config.server.port,
      routes: {
        cors: {
          origin: ['*'],
          credentials: true,
        },
      },
    };

    super(serverOptions);

    this.ext('onPreResponse', (req, h) => {
      if (!req.response.isBoom) return h.continue;

      const { method, response: res } = req;
      const statusCode = 'isBoom' in res ? res.output.statusCode : res.statusCode;

      const response = { statusCode, message: res.message };
      if (config.env === 'dev' && statusCode >= 400) {
        Object.assign(response, {
          debug: {
            method,
            payload: req.payload || undefined,
            query: Object.keys(req.query).length > 0 ? req.query : undefined,
            stack: res.stack,
          },
        });
      }

      return h.response(response).code(req.response.output.statusCode);
    });
  }
}

async function init(config) {
  const server = new ApiServer(config);

  await initPlugins(server);
  await initRoutes(server);

  return server;
}

export default init;
