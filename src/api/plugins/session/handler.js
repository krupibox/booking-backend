import Boom from '@hapi/boom';
import moment from 'moment';
import lodash from 'lodash';
import {
  isPasswordValid,
  generateJwt,
  generateRandomSalt,
  generatePasswordHash,
} from '../../utils/authenticate.js';

const { get, pick } = lodash;

export default function handler({ repositories }) {
  const { UserRepository } = repositories;

  async function meHandler(request) {
    const userId = get(request, 'auth.credentials.id', null);
    const user = await UserRepository.findOneByPk(userId);
    if (!user) throw Boom.notFound('Not found user');

    return { data: pick(user, ['id', 'email', 'first_name', 'last_name', 'avatar', 'role']) };
  }

  async function signInHandler(request) {
    const { email, password } = request.payload;
    const user = await UserRepository.findOne({ email });
    if (!user) {
      throw Error('Incorrect username');
    }

    if (!isPasswordValid(password, user)) {
      throw Error('Incorrect password');
    }

    const token = generateJwt(user);
    await UserRepository.updateOne({ id: user.id }, {
      token,
      last_login_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });

    return { data: { token } };
  }

  async function signUpHandler(request) {
    const {
      first_name, last_name, email, password,
    } = request.payload;

    const existUser = await UserRepository.findOne({ email });
    if (existUser) throw Error('User already exists');

    const salt = generateRandomSalt();
    const hashedPassword = generatePasswordHash(password, salt);

    const registerUser = await UserRepository.createOne({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      salt,
      last_login_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });

    const token = generateJwt(registerUser);
    await UserRepository.updateOne({ id: registerUser.id }, { token });

    return { data: { token } };
  }

  return { meHandler, signInHandler, signUpHandler };
}
