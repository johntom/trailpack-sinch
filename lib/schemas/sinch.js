const joi = require('joi')

module.exports = joi.object().keys({
  Key: joi.string().required(),
  Secret: joi.string().required()
})
