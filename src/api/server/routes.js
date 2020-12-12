import get from 'lodash/get.js';
import rootPlugin from '../plugins/root/plugin.js';
import sessionPlugin from '../plugins/session/plugin.js';

async function initRoutes(server) {
  const config = get(server, 'settings.app', {});

  await server.register([
    { plugin: sessionPlugin },
  ], { routes: { prefix: config.server.routePrefix } });

  await server.register([
    { plugin: rootPlugin },
  ]);

  return server;
}

export default initRoutes;
