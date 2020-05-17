const { throwIfMissing } = require('../utils');

class BaseModel {
  constructor(opts) {
    Object.assign(this, opts);
    throwIfMissing(this.db, 'Database must be fullfilled');
    throwIfMissing(this.model, 'Model cant be null');
    this.orm = this.db.r;
  }

  async insertOne(payload) {
    const saveData = new this.model(payload);
    await saveData.save();
    return saveData;
  }

  async findById(id) {
    const result = await this.model.get(id).run();
    return result;
  }

  async find(payload = { index: this.orm.desc('id')} ) {
    const result = await this.model.orderBy(payload).run();
    return result;
  }

  async findWithFilter(payload) {
    const result = await this.model.filter(payload).run();
    return result;
  }
}

module.exports = BaseModel;