import AbstractRepository from './AbstractRepository.js';

class HotelRepository extends AbstractRepository {
  constructor(props) {
    super(props);

    this._modelName = 'Hotel';
  }
}

export default HotelRepository;
