import Joi from '@hapi/joi';

export const loginPayload = Joi.object({
  email: Joi.string().example('test@test.com').description('User e-mail').required(),
  password: Joi.string().example('12345').description('User password').required(),
});

export const registerPayload = Joi.object({
  first_name: Joi.string().example('Test').description('User first name').required(),
  last_name: Joi.string().example('User').description('User last name').required(),
  email: Joi.string().example('test@test.com').description('User e-mail').required(),
  password: Joi.string().example('12345').description('User password').required(),
});
