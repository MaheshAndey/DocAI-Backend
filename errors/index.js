const CustomAPIError = require('./custom-error')
const UnauthenticatedError = require('./unauthicated-error')
const NotFoundError = require('./notfound-error')
const BadRequestError = require('./badrequest')

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
}