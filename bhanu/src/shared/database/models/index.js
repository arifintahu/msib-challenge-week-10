const Movie = require("./movie.model");
const Review = require("./review.model");
const User = require("./user.model");

Review.belongsTo(Movie, {
  foreignKey: "movieId",
});
Review.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Movie,
  Review,
  User,
};
