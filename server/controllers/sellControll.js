const { comparePass } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
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

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const foundSeller = await Seller.findOne({ where: { email } });
      if (!foundSeller) res.status(400).json(`invalid credentials`);
      const compare = comparePass(password, foundSeller.password);
      if (!compare) res.status(400).json(`invalid credentials`);

      let payload = { id: foundSeller.id };
      const access_token = createToken(payload);
      res.status(200).json({
        access_token,
        seller: {
          id: foundSeller.id,
          username: foundSeller.username,
          email: foundSeller.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SellerController;
