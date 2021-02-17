const Joi = require("joi");

exports.registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().min(2).max(30).required(),
    lastname: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(255).required(),
    confirmpassword: Joi.string().min(6).max(255).required(),

  });
  return schema.validate(data);
};

exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(25).required(),
  });
  return schema.validate(data);
};
