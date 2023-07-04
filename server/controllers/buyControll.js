const { Buyer } = require("../models/");

class BuyerController {
  static async read(req, res, next) {
    try {
      const buyer = await Buyer.findAll();
      res.status(200).json(buyer);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BuyerController;
