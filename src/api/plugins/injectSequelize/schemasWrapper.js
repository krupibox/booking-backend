import pkgSequelize from 'sequelize';

const { Sequelize } = pkgSequelize;

const Users = (sequelize) => {
  sequelize.define('User', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: Sequelize.STRING, allowNull: false },
    last_name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    avatar: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    token: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    salt: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    address: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'ADMIN' },
    last_login_at: { type: 'DATETIME', defaultValue: null },
    created_at: { type: 'TIMESTAMP', defaultValue: Sequelize.fn('NOW'), allowNull: false },
  }, { tableName: 'users', timestamps: false });
};

const Cities = (sequelize) => {
  sequelize.define('City', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, allowNull: false },
    alias: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
  }, { tableName: 'cities', timestamps: false });
};

const Hotels = (sequelize) => {
  sequelize.define('Hotel', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    city_id: { type: Sequelize.INTEGER },
    title: { type: Sequelize.STRING, allowNull: false },
    alias: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    preview_image: { type: Sequelize.STRING, allowNull: false },
    images: { type: Sequelize.STRING, allowNull: false },
    rooms: { type: Sequelize.INTEGER, allowNull: false },
    price: { type: Sequelize.INTEGER, allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    facilities: { type: Sequelize.STRING, allowNull: false },
  }, { tableName: 'hotels', timestamps: false });
};

const Ratings = (sequelize) => {
  sequelize.define('Rating', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    hotel_id: { type: Sequelize.INTEGER },
    rating: { type: Sequelize.INTEGER },
  }, { tableName: 'ratings', timestamps: false });
};

const Comments = (sequelize) => {
  sequelize.define('Comment', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    hotel_id: { type: Sequelize.INTEGER },
    user_id: { type: Sequelize.INTEGER },
    text: { type: Sequelize.STRING, allowNull: false },
  }, { tableName: 'comments', timestamps: false });
};

const Favorites = (sequelize) => {
  sequelize.define('Favorite', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    hotel_id: { type: Sequelize.INTEGER },
    user_id: { type: Sequelize.INTEGER },
    is_favorite: { type: Sequelize.BOOLEAN, allowNull: false },
  }, { tableName: 'favorites', timestamps: false });
};

export default {
  Users, Cities, Hotels, Ratings, Comments, Favorites,
};
