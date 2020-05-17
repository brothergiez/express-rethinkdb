const { errors: { InternalServerError } } = require('custom-error-exceptions')

const throwIfMissing = (args, message) => {
  if(!args) {
    throw new InternalServerError(message);
  }
};

module.exports = throwIfMissing;