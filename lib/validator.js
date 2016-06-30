const joi = require('joi')

const schemas = require('./schemas')

module.exports = {
  validateConfig (config) {
    if (!config) {
      return Promise.reject(new TypeError('config.sinch not found'))
    }
    return new Promise((resolve, reject) => {
      joi.validate(config, schemas.sinch, (err, value) => {
        if (err) return reject(new TypeError('config.sinch: ' + err))

        return resolve(value)
      })
    })
  }
}
