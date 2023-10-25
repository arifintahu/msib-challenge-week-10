const { Movie, Review, User } = require("../../../shared/database/models");
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
        [col("Movie.title"), "movieTitle"]

        // TODO: Include property movieTitle on getMovieReviews by joining table review and movie using sequelize
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

  getMovieReviewByUserIdAndMovieId = ({ movieId, userId }) => {
    return this.#review.findOne({
      where: {
        movieId,
        userId,
      },
    });
  };
}

module.exports = ReviewRepository;
