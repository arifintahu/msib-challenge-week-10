const { User } = require("../../../shared/database/models");
const BaseRepository = require("../../../shared/BaseRepository");

class UserRepository extends BaseRepository {
  #user;

  constructor() {
    super();
    this.#user = User;
  }

  createUser = ({ email, password, role }) => {
    return this.#user.create({
      email,
      password,
      role,
    });
  };

  getUsers = ({ page, perPage }) => {
    const offset = (page - 1) * perPage;
    return this.#user.findAll({
      attributes: ["id", "email", "role"],
      limit: perPage,
      offset: offset,
    });
  };

  getUserById = (userId) => {
    return this.#user.findByPk(userId, {
      attributes: ["id", "email", "role"],
    });
  };

  getUserByEmail = (email) => {
    return this.#user.findOne({
      where: {
        email: email,
      },
    });
  };
}

module.exports = UserRepository;
