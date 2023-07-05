const router = require("express").Router();
const SellerController = require("../controllers/sellControll");

router.get("/", SellerController.read);
router.post("/login", SellerController.login);

module.exports = router;
