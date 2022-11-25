import HttpErrorException from './http-error.exception.js';

export const httpErrorHandler = (err, res) => {
  if (err instanceof HttpErrorException) {
    return res.status(err.statusCode).send({ errors: err.errors });
  }
  // eslint-disable-next-line no-console
  console.log(err.message);
  return res.status(400).send();
};
