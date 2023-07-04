const { Product } = require("../models/");

class ProductController {
  static async read(req, res, next) {
    try {
      const product = await Product.findAll();
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductController;
