import Boom from '@hapi/boom';
import path from 'path';

export default {
  name: 'Root',
  async register(server) {
    server.route({
      method: '*',
      path: '/{any*}',
      options: {
        description: 'Catch not found url',
        tags: ['api'],
        auth: false,
        handler: () => Boom.notFound('Page not found'),
      },
    });

    server.route({
      method: 'GET',
      path: '/public/{file*}',
      options: {
        description: 'Get static files',
        tags: ['api'],
      },
      handler: {
        directory: {
          path: path.resolve('./public/'),
          listing: false,
        },
      },
    });
  },
};
