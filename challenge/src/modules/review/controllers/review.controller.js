const BaseController = require("../../../shared/BaseController");
const ReviewService = require("../services/review.service");
const { validateRequest } = require("../../../shared/validator");
const requirements = require("../requirements");

class ReviewController extends BaseController {
  #reviewService;
  constructor() {
    super();
    this.#reviewService = new ReviewService();
  }

  createReview = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.createReview);
      const result = await this.#reviewService.createReview({
        ...req.body,
        movieId: req.params.movieId,
      });
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };

  getMovieReviews = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.getMovieReviews);
      const result = await this.#reviewService.getMovieReviews({
        ...req.query,
        movieId: req.params.movieId,
      });
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ReviewController;
