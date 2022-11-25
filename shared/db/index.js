import { Sequelize } from 'sequelize';

import productModel from './models/product.model.js';
import productUserModel from './models/product-user.model.js';
import { PG_CONN_STR } from '../config.js';

let db;

const buildDb = () => {
  const sequelize = new Sequelize(
    PG_CONN_STR,
    {
      dialect: 'postgres',
    },
  );

  const models = [
    productModel,
    productUserModel,
  ].reduce((acc, model) => ({
    ...acc,
    [model.name]: model.init(sequelize, Sequelize),
  }), {});

  // Run `.associate` if it exists,
  // ie create relationships in the ORM
  Object.values(models)
    .filter((model) => typeof model.associate === 'function')
    .forEach((model) => model.associate(models));

  const syncDb = async () => sequelize.sync({ force: true });
  db = {
    sequelize,
    syncDb,
    models,
  };

  return db;
};

export const buildOrGetModels = () => db ?? buildDb();
