const BaseController = require("../../../shared/BaseController");
const MovieService = require("../services/movie.service");
const { validateRequest } = require("../../../shared/validator");
const requirements = require("../requirements");

class MovieController extends BaseController {
  #movieService;
  constructor() {
    super();
    this.#movieService = new MovieService();
  }

  createMovie = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.createMovie);
      const result = await this.#movieService.createMovie(req.body);
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };

  getMovies = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.getMovies);
      const result = await this.#movieService.getMovies(req.query);
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };

  getMovieById = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.getMovieById);
      const result = await this.#movieService.getMovieById(req.params.id);
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieController;
