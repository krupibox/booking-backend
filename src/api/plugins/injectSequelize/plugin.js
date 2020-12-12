import sequelize from 'sequelize';
import schemasWrapper from './schemasWrapper.js';

export default {
  name: 'Inject Sequelize',
  async register(server, credentials) {
    const dbClient = new sequelize.Sequelize(credentials);
    await dbClient.authenticate({ logging: false });
    schemasWrapper(dbClient);

    server.decorate('server', 'sequelize', dbClient);
  },
};
