const ReviewRepository = require("../repositories/review.repository");
const UserService = require("../../user/services/user.service");
const MovieService = require("../../movie/services/movie.service");

class ReviewService {
  #reviewRepository;
  #userService;
  #movieService;

  constructor() {
    this.#reviewRepository = new ReviewRepository();
    this.#userService = new UserService();
    this.#movieService = new MovieService();
  }

  createReview = async ({ userId, movieId, rating, comment }) => {
    if (!userId || !movieId || !rating) {
      throw new Error("userId, movieId, and rating cannot be empty");
    }

    // TODO: Add userId validation by calling UserService.getUserById
    const user = await this.#userService.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // TODO: Add movieId validation by calling MovieService.getMovieById
    const movie = await this.#movieService.getMovieById(movieId);
    if (!movie) {
      throw new Error("Movie not found");
    }

    // TODO: Validate review uniqueness, so it can't be written twice for each userId and movieId
    const existingReview = await this.#reviewRepository.getMovieUnique({ userId, movieId });
    if (existingReview) {
      throw new Error("Review already exists for this user and movie");
    }

    return this.#reviewRepository.createReview({
      userId,
      movieId: parseInt(movieId),
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
    const movie = await this.#movieService.getMovieById(movieId);
    if (!movie) {
      throw new Error("Movie not found");
    }

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
