import Queue from 'bull';

import { REDIS_CONNECTION_STRING } from '../config.js';

const buildQueue = ({ name }) => {
  const queue = new Queue(name, REDIS_CONNECTION_STRING);
  // eslint-disable-next-line no-console
  queue.on('error', (e) => console.error(e));
  const createProducer = async (...args) => queue.add(args);
  const createConsumer = async (callback) => queue.process(callback);

  return { createProducer, createConsumer };
};

export { buildQueue };
