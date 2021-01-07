import AbstractRepository from './AbstractRepository.js';

class CityRepository extends AbstractRepository {
  constructor(props) {
    super(props);

    this._modelName = 'City';
  }
}

export default CityRepository;
