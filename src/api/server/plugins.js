import get from 'lodash/get.js';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import hapiSwagger from 'hapi-swagger';
import AuthBearer from 'hapi-auth-bearer-token';
import injectSequelizePlugin from '../plugins/injectSequelize/plugin.js';
import injectRepositoriesPlugin from '../plugins/injectRepositories/plugin.js';
import authTokenPlugin from '../plugins/authToken/plugin.js';

async function initPlugins(server) {
  const config = get(server, 'settings.app', {});

  await server.register([
    Inert,
    Vision,
    AuthBearer,
    { plugin: hapiSwagger, options: config.swagger },
    { plugin: injectSequelizePlugin, options: config.db },
    { plugin: injectRepositoriesPlugin },
    { plugin: authTokenPlugin },
  ]);

  return server;
}

export default initPlugins;
