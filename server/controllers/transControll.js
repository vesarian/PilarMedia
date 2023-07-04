const { Transaction } = require("../models/");

class TransactionController {
  static async read(req, res, next) {
    try {
      const trans = await Transaction.findAll();
      res.status(200).json(trans);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TransactionController;
