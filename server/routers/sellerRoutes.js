const router = require('express').Router();
const SellerController = require('../controllers/sellControll');

router.get("/", SellerController.read)

module.exports = router