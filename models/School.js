module.exports = function (sequelize, DataType) {
  const School = sequelize.define("School", {
    post: DataType.STRING,
  });
  return School;
};
