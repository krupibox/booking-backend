import dotenv from 'dotenv';
import pkgSequelize from 'sequelize';
import schemasWrapper from '../api/plugins/injectSequelize/schemasWrapper.js';
import * as seed from './seeds/index.js';
import appConfig from '../config.js';

dotenv.config();
const { Sequelize } = pkgSequelize;

(async () => {
  const sequelize = new Sequelize(appConfig.db);
  schemasWrapper(sequelize);

  try {
    await sequelize.drop();
    console.log('[OK] All tables is dropped');

    console.log('[OK] Wrapped sequelize schemas');

    await sequelize.sync({ force: true });
    console.log('[OK] Sync all tables');

    await sequelize.getQueryInterface()
      .bulkInsert('users', seed.users)
      .then(() => console.log(`[OK] Insert users: ${seed.users.length}`))
      .catch((e) => console.error(e));

    await sequelize.getQueryInterface()
      .bulkInsert('cities', seed.cities)
      .then(() => console.log(`[OK] Insert cities: ${seed.cities.length}`))
      .catch((e) => console.error(e));

    await sequelize.getQueryInterface()
      .bulkInsert('hotels', seed.hotels)
      .then(() => console.log(`[OK] Insert cities: ${seed.hotels.length}`))
      .catch((e) => console.error(e));

    await sequelize.getQueryInterface()
      .bulkInsert('ratings', seed.ratings)
      .then(() => console.log(`[OK] Insert cities: ${seed.ratings.length}`))
      .catch((e) => console.error(e));

    await sequelize.getQueryInterface()
      .bulkInsert('comments', seed.comments)
      .then(() => console.log(`[OK] Insert comments: ${seed.comments.length}`))
      .catch((e) => console.error(e));

    await sequelize.getQueryInterface()
      .bulkInsert('favorites', seed.favorites)
      .then(() => console.log(`[OK] Insert favorites: ${seed.favorites.length}`))
      .catch((e) => console.error(e));

    console.log('=============================');
    console.log('===== Migrate completed =====');
    console.log('=============================');
  } catch (e) {
    console.error(e);
    await sequelize.close();
  }

  process.exit(0);
})();
