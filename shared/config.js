const {
  SERVER_ADDRESS = 'localhost',
  SERVER_PORT = 3000,
  PG_CONN_STR = 'postgres://postgres:postgres@localhost:5432/stay-tuned',
  SMTP_HOST = 'localhost',
  SMTP_PORT = 2525,
  MAIL_ADDRESS = '"Foo" <foo@example.com>',
  REDIS_CONNECTION_STRING = 'redis://127.0.0.1:6379',
  QUEUE_NAME = 'price-advisor',
  CLIENT_ADDRESS = 'localhost',
  CLIENT_PORT = 4000,
  API_ENDPOINT = '/api',
} = process.env;

export {
  SERVER_ADDRESS,
  SERVER_PORT,
  PG_CONN_STR,
  SMTP_HOST,
  SMTP_PORT,
  MAIL_ADDRESS,
  REDIS_CONNECTION_STRING,
  QUEUE_NAME,
  CLIENT_ADDRESS,
  CLIENT_PORT,
  API_ENDPOINT,
};
