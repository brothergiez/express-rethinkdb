const userSchema = (db) => {
  const orm = db.r;
  const type = db.type;

  const User = db.createModel('users', {
    id: type.string(),
    username: type.string(),
    password: type.string(),
    createdAt: type.date().default(orm.now())
  });

  return User;
}

module.exports = userSchema;