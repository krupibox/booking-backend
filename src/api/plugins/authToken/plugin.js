import Boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import moment from 'moment';

export default {
  name: 'Auth token',
  async register(server) {
    server.auth.strategy('token', 'bearer-access-token', {
      allowQueryToken: false,
      unauthorized() {
        throw Boom.unauthorized();
      },
      validate(request, token) {
        if (!token) return { isValid: false };

        try {
          const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
          if (!decodeToken.exp) return { isValid: false };

          const expMoment = moment.unix(decodeToken.exp);
          if (moment().clone().isSameOrAfter(expMoment)) {
            return { isValid: false };
          }

          return { isValid: true, credentials: decodeToken };
        } catch (e) {
          return { isValid: false };
        }
      },
    });
  },
};
