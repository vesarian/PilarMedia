const router = require("express").Router();
const buyer = require("./buyerRoutes");
const seller = require("./sellerRoutes");
const product = require("./productRoutes");
const transaction = require("./transactionRoutes");
const authentication = require("../middlewares/authentication");

router.use("/buyers", buyer);
router.use("/sellers", seller);
router.use("/products", authentication, product);
router.use("/transactions", transaction);

module.exports = router;
