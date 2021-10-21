const express = require('express');
const product_categoriesController = require('../../controllers/product_categories.controller');

const router = express.Router();

router
  .route('/')
  .post(product_categoriesController.createProduct_categories)
  .get(product_categoriesController.getProduct_categoriess);

router
  .route('/:product_categoriesId')
  .get(product_categoriesController.getProduct_categories)
  .patch(product_categoriesController.updateProduct_categories)
  .delete(product_categoriesController.deleteProduct_categories);

module.exports = router;