import AbstractRepository from './AbstractRepository.js';

class FavoriteRepository extends AbstractRepository {
  constructor(props) {
    super(props);

    this._modelName = 'Favorite';
  }
}

export default FavoriteRepository;
