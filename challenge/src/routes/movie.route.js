const { Router } = require("express");
const { MovieController } = require("../modules/movie/controllers");
const { ReviewController } = require("../modules/review/controllers");
const { authMiddleware } = require("../shared/middlewares");
const { ROLES } = require("../shared/constants");

const router = Router();
const movieController = new MovieController();
const reviewController = new ReviewController();

router
  .route("/")
  .post(
    [authMiddleware.authenticate, authMiddleware.authorize(ROLES.ADMIN)],
    movieController.createMovie,
  )
  .get(movieController.getMovies);

router.route("/:movieId").get(movieController.getMovieById);

router
  .route("/:movieId/reviews")
  .post(
    [authMiddleware.authenticate, authMiddleware.authorize(ROLES.GENERAL)],
    reviewController.createReview,
  )
  .get(reviewController.getMovieReviews);

module.exports = router;
