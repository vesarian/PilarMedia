const router = require('express').Router();
const ProductController = require('../controllers/prodControll');

router.get("/", ProductController.read)

module.exports = router