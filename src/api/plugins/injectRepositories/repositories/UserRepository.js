import AbstractRepository from './AbstractRepository.js';

class UserRepository extends AbstractRepository {
  constructor(props) {
    super(props);

    this._modelName = 'User';
  }
}

export default UserRepository;
