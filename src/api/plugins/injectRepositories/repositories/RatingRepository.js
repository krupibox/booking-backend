import AbstractRepository from './AbstractRepository.js';

class RatingRepository extends AbstractRepository {
  constructor(props) {
    super(props);

    this._modelName = 'Rating';
  }
}

export default RatingRepository;
