import lodash from 'lodash';
import AbstractRepository from './repositories/AbstractRepository.js';
import UserRepository from './repositories/UserRepository.js';

const { get } = lodash;

export default {
  name: 'Inject Repositories',
  async register(server) {
    const sequelize = get(server, 'sequelize');
    const repositories = {
      AbstractRepository: new AbstractRepository(sequelize),
      UserRepository: new UserRepository(sequelize),
    };

    server.decorate('server', 'repositories', repositories);
  },
};
