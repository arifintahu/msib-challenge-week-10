const { DataTypes } = require("sequelize");
const { db } = require("../index");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "general"),
      allowNull: false,
      defaultValue: "general",
    },
  },
  {
    tableName: "users",
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = User;
