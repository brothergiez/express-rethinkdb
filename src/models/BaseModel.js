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

  async find(order = { index: this.orm.desc('id')}, skip = 0, limit=20 ) {
    const result = await this.model.orderBy(order).skip(skip).limit(limit).run();
    return result;
  }

  async findWithFilter(payload, skip = 0, limit=20) {
    const result = await this.model.filter(payload).skip(skip).limit(limit).run();
    return result;
  }

  async updateById(id, payload) {
    const update =  await this.model.get(id).update(payload).run();
    return update;
  }

  async updateWithFilter(filter, payload) {
    const update =  await this.model.filter(filter).update(payload).run();
    return update;
  }
}

module.exports = BaseModel;