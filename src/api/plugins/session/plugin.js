import handler from './handler.js';
import { loginPayload, registerPayload } from './validate.js';

export default {
  name: 'Session',
  version: '0.0.1',
  register: (server) => {
    const {
      meHandler, signInHandler, signUpHandler,
    } = handler(server);

    server.route({
      method: 'GET',
      path: '/me',
      options: {
        description: 'Identify by token',
        tags: ['api'],
        auth: 'token',
        handler: meHandler,
      },
    });

    server.route({
      method: 'POST',
      path: '/sign-in',
      options: {
        description: 'Login by credential',
        tags: ['api'],
        auth: false,
        validate: { payload: loginPayload },
        handler: signInHandler,
      },
    });

    server.route({
      path: '/sign-up',
      method: 'POST',
      options: {
        description: 'Register new user',
        tags: ['api'],
        auth: false,
        validate: { payload: registerPayload },
        handler: signUpHandler,
      },
    });
  },
};
