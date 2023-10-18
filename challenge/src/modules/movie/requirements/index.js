const { body, param, query } = require("express-validator");

const requirements = {
  createMovie: [
    body("title").isString().isLength({ min: 3 }),
    body("year").isInt({ min: 1900 }),
    body("genre").isString().isLength({ min: 3 }),
    body("language").isString().isLength({ min: 3 }),
  ],
  getMovies: [
    query("page").isInt({ min: 1 }).optional({ nullable: true }),
    query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
  ],
  getMovieById: [param("movieId").isInt({ min: 1 })],
};

module.exports = requirements;
