const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { product_categoriesService } = require('../services');

const createProduct_categories = catchAsync(async (req, res) => {
  const product_categories = await product_categoriesService.createProduct_categories(req.body);
  res.status(httpStatus.CREATED).send(product_categories);
});

const getProduct_categoriess = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await product_categoriesService.queryProduct_categoriess(filter, options);
  res.send(result);
});

const getProduct_categories = catchAsync(async (req, res) => {
  const product_categories = await product_categoriesService.getProduct_categoriesById(req.params.product_categoriesId);
  if (!product_categories) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product_categories not found');
  }
  res.send(product_categories);
});

const updateProduct_categories = catchAsync(async (req, res) => {
  const product_categories = await product_categoriesService.updateProduct_categoriesById(req.params.product_categoriesId, req.body);
  res.send(product_categories);
});

const deleteProduct_categories = catchAsync(async (req, res) => {
  await product_categoriesService.deleteProduct_categoriesById(req.params.product_categoriesId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProduct_categories,
  getProduct_categoriess,
  getProduct_categories,
  updateProduct_categories,
  deleteProduct_categories,
};