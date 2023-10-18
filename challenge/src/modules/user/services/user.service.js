const UserRepository = require("../repositories/user.repository");
const AuthService = require("./auth.service");
const PasswordManager = require("./password-manager");
const { SECRET_KEY } = require("../../../shared/config");

class UserService {
  #userRepository;
  #authService;
  #passwordManager;

  constructor() {
    this.#userRepository = new UserRepository();
    this.#authService = new AuthService(120, SECRET_KEY);
    this.#passwordManager = new PasswordManager();
  }

  register = async ({ email, password, role }) => {
    const existingUser = await this.#userRepository.getUserByEmail(email);

    if (existingUser) {
      throw new Error("User already registered");
    }

    const hashedPassword = await this.#passwordManager.hashPassword(password);
    return this.#userRepository.createUser({
      email,
      password: hashedPassword,
      role,
    });
  };

  login = async ({ email, password }) => {
    const user = await this.#userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("User is not registered yet");
    }

    const isPasswordCorrect = await this.#passwordManager.compare(
      password,
      user.getDataValue("password"),
    );

    if (!isPasswordCorrect) {
      throw new Error("Password is not correct");
    }

    const token = this.#authService.createToken(user.getDataValue("id"));

    return {
      token,
    };
  };

  getUsers = async ({ page = 1, perPage = 10 }) => {
    if (page < 1 || perPage < 1) {
      throw new Error("Invalid page and/or perPage");
    }

    const users = await this.#userRepository.getUsers({ page, perPage });
    if (!users.length) {
      throw new Error("User not found");
    }

    return users;
  };

  getUserById = async (id) => {
    if (!Number.isInteger(id)) {
      throw new Error("Invalid id");
    }

    const user = await this.#userRepository.getUserById(id);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };
}

module.exports = UserService;
