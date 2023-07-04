"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Buyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Buyer.hasMany(models.Transaction, { foreignKey: "BuyerId" });
    }
  }
  Buyer.init(
    {
      id_penerima: DataTypes.STRING,
      nama: DataTypes.STRING,
      alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Buyer",
    }
  );
  return Buyer;
};
