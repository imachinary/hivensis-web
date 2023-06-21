const Sequelize = require('sequelize');
const { glob } = require('glob-promise');

require('dotenv').config();

const db = {};

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorAliases: false,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);


glob.sync(`${process.cwd()}/server/**/models/*`).forEach((modelFile) => {
  require(modelFile)(sequelize);
});

Object.keys(sequelize.models).forEach((modelName) => {
  if (
    'associate' in sequelize.models[modelName] &&
    typeof sequelize.models[modelName].associate === 'function'
  ) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Create Models
//sequelize.sync();
module.exports = { ...db, models: sequelize.models };
