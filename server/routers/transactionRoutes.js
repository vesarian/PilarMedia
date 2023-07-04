const router = require("express").Router();
const TransactionController = require("../controllers/transControll");

router.get("/", TransactionController.read);

module.exports = router;
