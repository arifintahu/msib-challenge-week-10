const { Router } = require("express");
const { MovieController } = require("../modules/movie/controllers");
const { authMiddleware } = require("../shared/middlewares");
const { ROLES } = require("../shared/constants");

const router = Router();
const movieController = new MovieController();

router
  .route("/")
  .post(
    [authMiddleware.authenticate, authMiddleware.authorize(ROLES.ADMIN)],
    movieController.createMovie,
  )
  .get(movieController.getMovies);

router.route("/:id").get(movieController.getMovieById);

module.exports = router;
