const router = require('express').Router();
const ProductController = require('../controllers/prodControll');

router.get("/", ProductController.read)
router.post("/", ProductController.add)
router.delete("/:id", ProductController.delete)

module.exports = router