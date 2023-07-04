const router = require('express').Router();
const BuyerController = require('../controllers/buyControll');

router.get("/", BuyerController.read)

module.exports = router