const { Movie } = require("../../../shared/database/models");
const BaseRepository = require("../../../shared/BaseRepository");

class MovieRepository extends BaseRepository {
  #movie;

  constructor() {
    super();
    this.#movie = Movie;
  }

  createMovie = ({ title, year, genre, language }) => {
    return this.#movie.create({
      title,
      year,
      genre,
      language,
    });
  };

  getMovies = ({ page, perPage }) => {
    const offset = (page - 1) * perPage;
    return this.#movie.findAll({
      attributes: ["id", "title", "year", "genre", "language"],
      limit: perPage,
      offset: offset,
    });
  };

  getMovieById = (movieId) => {
    return this.#movie.findByPk(movieId);
  };
}

module.exports = MovieRepository;
