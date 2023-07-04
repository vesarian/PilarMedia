"use strict";
const { Model } = require("sequelize");
const { hashPass } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seller.init(
    {
      id_pengirim: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Seller",
    }
  );
  Seller.beforeCreate((seller) => {
    seller.password = hashPass(seller.password);
  });
  return Seller;
};
