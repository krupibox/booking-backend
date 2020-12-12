class AbstractRepository {
  constructor(sequelize) {
    if (!sequelize) throw new Error('Sequelize is required!');

    this._sequelize = sequelize;
    this._modelName = null;
  }

  getModelName() {
    if (!this._modelName) throw Error('ModelName is undefined');

    return this._modelName;
  }

  async findOneByPk(id, isReturnModel = false) {
    const modelName = this.getModelName();

    const findRecord = await this._sequelize.models[modelName].findByPk(id, { logging: false });
    return isReturnModel ? findRecord : findRecord.dataValues;
  }

  async createOne(payload, isReturnModel = false) {
    const modelName = this.getModelName();
    const newRecord = await this._sequelize
      .models[modelName].create(payload, { logging: false });

    return isReturnModel ? newRecord : newRecord.dataValues;
  }

  async bulkInsert(rows = [], options = {}) {
    const modelName = this.getModelName();
    if (rows.length === 0) return null;

    return this._sequelize.models[modelName]
      .bulkCreate(rows, { logging: false, ...options });
  }

  async findOne(where, isReturnModel = false) {
    const modelName = this.getModelName();

    const existModel = await this._sequelize.models[modelName].findOne({ where, logging: false });
    if (!existModel) return null;

    return isReturnModel ? existModel : existModel.dataValues;
  }

  async findAll(where, isReturnModel = false) {
    const modelName = this.getModelName();

    const rows = await this._sequelize.models[modelName].findAll({ where, logging: false });

    return isReturnModel ? rows : rows.map((_) => _.dataValues);
  }

  async updateOne(where, payload) {
    const existModel = await this.findOne(where, true);

    return existModel.update(payload, { logging: false, where });
  }

  deleteRows(where) {
    const modelName = this.getModelName();

    return this._sequelize.models[modelName].destroy({ where, logging: false });
  }

  truncate() {
    const modelName = this.getModelName();

    return this._sequelize.models[modelName].destroy({ truncate: true, cascade: false });
  }
}

export default AbstractRepository;
