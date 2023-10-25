const { body, param, query } = require("express-validator");

const requirements = {
  createReview: [
    param("movieId").isInt({ min: 1 }),
    body("rating").isInt({ min: 1, max: 5 }),
    body("comment").isString().optional({ nullable: true }),
  ],
  getMovieReviews: [
    param("movieId").isInt({ min: 1 }),
    query("page").isInt({ min: 1 }).optional({ nullable: true }),
    query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
  ],
};

module.exports = requirements;
