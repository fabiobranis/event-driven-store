import { QUEUE_NAME } from 'shared/config.js';
import { buildQueue } from 'shared/queue/index.js';
import { sendMailForUsers } from './services/product-user.service.js';

const { createConsumer } = buildQueue({ name: QUEUE_NAME });

createConsumer((job) => {
  const [product] = job.data;
  sendMailForUsers(product);
// eslint-disable-next-line no-console
}).catch(console.error);
