/* eslint-disable no-console */
import { SERVER_PORT } from 'shared/config.js';
import { buildOrGetModels } from 'shared/db/index.js';
import { seedData } from 'shared/seeders/app.seeder.js';
import app from './app.js';

const { syncDb } = buildOrGetModels();

(async () => {
  await syncDb();
  await seedData();
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
})();
