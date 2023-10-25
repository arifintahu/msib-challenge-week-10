const { DataTypes } = require("sequelize");
const { db } = require("../index");

const Movie = db.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "movies",
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = Movie;
