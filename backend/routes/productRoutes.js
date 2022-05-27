const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productController");

//Get all product
//@route GET /api/products
//@access public
router.get("/", getAllProducts);
//Get a product by id
//@route GET /api/products/:id
//@access public
router.get("/:id", getProductById);

module.exports = router;
