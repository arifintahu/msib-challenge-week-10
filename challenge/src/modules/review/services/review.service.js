const ReviewRepository = require("../repositories/review.repository");

class ReviewService {
  #reviewRepository;

  constructor() {
    this.#reviewRepository = new ReviewRepository();
  }

  createReview = ({ userId, movieId, rating, comment }) => {
    if (!userId || !movieId || !rating) {
      throw new Error("userId, movieId, and rating cannot be empty");
    }

    // TODO: Add userId validation by calling UserService.getUserById

    // TODO: Add movieId validation by calling MovieService.getMovieById

    // TODO: Validate review uniqueness, so it can't be written twice for each userId and movieId

    return this.#reviewRepository.createReview({
      userId,
      movieId,
      rating,
      comment,
    });
  };

  getMovieReviews = async ({ movieId, page = 1, perPage = 10 }) => {
    if (!movieId) {
      throw new Error("movieId cannot be empty");
    }

    if (page < 1 || perPage < 1) {
      throw new Error("Invalid page and/or perPage");
    }

    // TODO: Add movieId validation by calling MovieService.getMovieById

    const reviews = await this.#reviewRepository.getMovieReviews({
      movieId,
      page,
      perPage,
    });
    if (!reviews.length) {
      throw new Error("Review not found");
    }

    return reviews;
  };
}

module.exports = ReviewService;
