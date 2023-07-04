const { Seller } = require("../models/");

class SellerController {
  static async read(req, res, next) {
    try {
      const seller = await Seller.findAll();
      res.status(200).json(seller);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SellerController;
