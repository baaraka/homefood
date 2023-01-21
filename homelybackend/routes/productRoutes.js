const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//GET ALL PRODUCTS FROM DB
//@route GET api/products
//@access public
router.get("/", getAllProducts);

//GET A PRODUCT BY ID FROM DB
//@route GET api/products/:id
//@access public
router.get("/:id", getProductById);

module.exports = router;
