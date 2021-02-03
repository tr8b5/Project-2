module.exports = function (sequelize, DataType) {
  const Post = sequelize.define("Post", {
    school: DataType.STRING,
    subject: DataType.STRING,
  });
  return Post;
};
