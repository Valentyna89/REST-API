const Joi = require("joi");

const contactShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
});

module.exports = contactShema;
