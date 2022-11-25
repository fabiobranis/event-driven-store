import HttpErrorException from './http-error.exception.js';

export default class EntityNotFoundException extends HttpErrorException {
  constructor({ message, errors }) {
    super({ message, statusCode: 422, errors });
  }
}
