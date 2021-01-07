import AbstractRepository from './AbstractRepository.js';

class CommentRepository extends AbstractRepository {
  constructor(props) {
    super(props);

    this._modelName = 'Comment';
  }
}

export default CommentRepository;
