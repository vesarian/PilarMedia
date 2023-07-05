const { verifyToken } = require("../helpers/jwt");
const { Seller } = require("../models/");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;

    if (!access_token) res.status(401).json(`unauthorized`);

    let token = verifyToken(access_token);
    const seller = await Seller.findByPk(token.id);
    if (!seller) res.status(401).json(`unauthorized`);

    req.seller = { id: token.id, email: seller.email };
    next()
  } catch (error) {
    console.log(error);
  }
}

module.exports = authentication
