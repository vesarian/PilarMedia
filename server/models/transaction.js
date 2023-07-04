"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Buyer, { foreignKey: "BuyerId" });
      Transaction.belongsTo(models.Seller, { foreignKey: "SellerId" });
      Transaction.belongsTo(models.Product, { foreignKey: "ProductId" });
    }
  }
  Transaction.init(
    {
      BuyerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Buyers",
          key: "id",
        },
      },
      SellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Sellers",
          key: "id",
        },
      },
      ProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      priority: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
