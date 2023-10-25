const { Review, User, Movie } = require("../../../shared/database/models");
const BaseRepository = require("../../../shared/BaseRepository");
const { col } = require("sequelize");

class ReviewRepository extends BaseRepository {
  #review;

  constructor() {
    super();
    this.#review = Review;
  }

  createReview = ({ userId, movieId, rating, comment }) => {
    return this.#review.create({
      userId,
      movieId,
      rating,
      comment,
    });
  };

  getMovieReviews = ({ movieId, page, perPage }) => {
    const offset = (page - 1) * perPage;
    return this.#review.findAll({
      attributes: [
        "id",
        "userId",
        "movieId",
        "rating",
        "comment",
        [col("User.email"), "userEmail"],
        // TODO: Include property movieTitle on getMovieReviews by joining table review and movie using sequelize
        [col("Movie.title"), "movieTitle"]
      ],
      include: [
        {
          model: User,
          attributes: [],
        },
        {
          model: Movie,
          attributes: [],
        }
      ],
      where: {
        movieId,
      },
      limit: perPage,
      offset: offset,
    });
  };

  getMovieUnique = ({ userId, movieId }) => {
    return this.#review.findOne({
      attributes: [
        "id",
        "userId",
        "movieId",
        "rating",
        "comment",
        [col("User.email"), "userEmail"],
        // TODO: Include property movieTitle on getMovieReviews by joining table review and movie using sequelize
        [col("Movie.title"), "movieTitle"]
      ],
      include: [
        {
          model: User,
          attributes: [],
        },
        {
          model: Movie,
          attributes: [],
        }
      ],
      where: {
        userId,
        movieId
      },
    });
  };
}

module.exports = ReviewRepository;
