const MovieRepository = require("../repositories/movie.repository");

class MovieService {
  #movieRepository;

  constructor() {
    this.#movieRepository = new MovieRepository();
  }

  createMovie = ({ title, year, genre, language }) => {
    if (!title || !year) {
      throw new Error("Title and year cannot be empty");
    }
    return this.#movieRepository.createMovie({
      title,
      year,
      genre,
      language,
    });
  };

  getMovies = async ({ page = 1, perPage = 10 }) => {
    if (page < 1 || perPage < 1) {
      throw new Error("Invalid page and/or perPage");
    }

    const movies = await this.#movieRepository.getMovies({ page, perPage });
    if (!movies.length) {
      throw new Error("Movie not found");
    }

    return movies;
  };

  getMovieById = async (movieId) => {
    if (!Number.isInteger(Number(movieId))) {
      throw new Error("Invalid movieId");
    }

    const movie = await this.#movieRepository.getMovieById(movieId);
    if (!movie) {
      throw new Error("Movie not found");
    }

    return movie;
  };
}

module.exports = MovieService;
