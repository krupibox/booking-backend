import pkgSequelize from 'sequelize';

const { Sequelize } = pkgSequelize;

export default (sequelize) => {
  sequelize.define('User', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: Sequelize.STRING, allowNull: false },
    last_name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    avatar: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    token: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    salt: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
    role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'ADMIN' },
    last_login_at: { type: 'DATETIME', defaultValue: null },
    created_at: { type: 'TIMESTAMP', defaultValue: Sequelize.fn('NOW'), allowNull: false },
  }, { tableName: 'users', timestamps: false });
};
