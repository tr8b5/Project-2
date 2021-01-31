module.exports = function (sequelize, DataType) {
  const Post = sequelize.define("Post", {
    school: DataType.STRING,
    subject: DataType.STRING,
    post: DataType.STRING,
    votes: DataType.INTEGER,
  });
  return Post;
};
