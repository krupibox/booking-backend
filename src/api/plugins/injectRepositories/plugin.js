import lodash from 'lodash';
import AbstractRepository from './repositories/AbstractRepository.js';
import UserRepository from './repositories/UserRepository.js';
import CityRepository from './repositories/CityRepository.js';
import HotelRepository from './repositories/HotelRepository.js';
import RatingRepository from './repositories/RatingRepository.js';
import CommentRepository from './repositories/CommentRepository.js';
import FavoriteRepository from './repositories/FavoriteRepository.js';

const { get } = lodash;

export default {
  name: 'Inject Repositories',
  async register(server) {
    const sequelize = get(server, 'sequelize');
    const repositories = {
      AbstractRepository: new AbstractRepository(sequelize),
      UserRepository: new UserRepository(sequelize),
      CityRepository: new CityRepository(sequelize),
      HotelRepository: new HotelRepository(sequelize),
      RatingRepository: new RatingRepository(sequelize),
      CommentRepository: new CommentRepository(sequelize),
      FavoriteRepository: new FavoriteRepository(sequelize),
    };

    server.decorate('server', 'repositories', repositories);
  },
};
