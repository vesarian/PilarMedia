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

  static async add(req, res, next) {
    const { id_order, product_name, category, SellerId } = req.body;
    try {
      const newProd = await Product.create({
        id_order,
        product_name,
        category,
        SellerId,
      });
      res.status(201).json(newProd);
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    console.log(id);
    try {
      const prod = await Product.findByPk(id);
      await Product.destroy({
        where: { id },
      });
      if (!prod || !id) res.status(500).json(`notfound`);
      else res.status(200).json(`${prod.product_name} has been deleted`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductController;
