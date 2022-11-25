import HttpErrorException from './http-error.exception.js';

export default class UserAlreadyAssociatedError extends HttpErrorException {
  constructor({ message, errors }) {
    super({ message, statusCode: 422, errors });
  }
}
