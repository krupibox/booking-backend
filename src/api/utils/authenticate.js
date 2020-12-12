import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import parseInt from 'lodash/parseInt.js';

export const generateRandomSalt = () => crypto.randomBytes(16).toString('hex');

export const generatePasswordHash = (password, salt) => crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

export const isPasswordValid = (password, user) => {
  const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
  return hash === user.password;
};

export const generateJwt = (user) => {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    id: user.id,
    email: user.email,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.JWT_SECRET);
};
