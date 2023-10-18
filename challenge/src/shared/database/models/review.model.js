const { DataTypes } = require("sequelize");
const { db } = require("../index");
const Movie = require("./movie.model");
const User = require("./user.model");

const Review = db.define(
  "Review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Movie,
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "reviews",
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = Review;
