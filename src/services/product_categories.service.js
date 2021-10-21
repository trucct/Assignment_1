const httpStatus = require('http-status');
const { Product_categories } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a product_categories
 * @param {Object} product_categoriesBody
 * @returns {Promise<Product_categories>}
 */
const createProduct_categories = async (product_categoriesBody) => {
  return Product_categories.create(product_categoriesBody);
};

/**
 * Query for product_categoriess
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProduct_categoriess = async (filter, options) => {
  const product_categoriess = await Product_categories.paginate(filter, options);
  return product_categoriess;
};

/**
 * Get product_categories by id
 * @param {ObjectId} id
 * @returns {Promise<Product_categories>}
 */
const getProduct_categoriesById = async (id) => {
  return Product_categories.findById(id);
};

/**
 * Get product_categories by email
 * @param {string} email
 * @returns {Promise<Product_categories>}
 */
const getProduct_categoriesByEmail = async (email) => {
  return Product_categories.findOne({ email });
};

/**
 * Update product_categories by id
 * @param {ObjectId} product_categoriesId
 * @param {Object} updateBody
 * @returns {Promise<Product_categories>}
 */
const updateProduct_categoriesById = async (product_categoriesId, updateBody) => {
  const product_categories = await getProduct_categoriesById(product_categoriesId);
  if (!product_categories) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product_categories not found');
  }
  if (updateBody.email && (await Product_categories.isEmailTaken(updateBody.email, product_categoriesId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(product_categories, updateBody);
  await product_categories.save();
  return product_categories;
};

/**
 * Delete product_categories by id
 * @param {ObjectId} product_categoriesId
 * @returns {Promise<Product_categories>}
 */
const deleteProduct_categoriesById = async (product_categoriesId) => {
  const product_categories = await getProduct_categoriesById(product_categoriesId);
  if (!product_categories) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product_categories not found');
  }
  await product_categories.remove();
  return product_categories;
};

module.exports = {
  createProduct_categories,
  queryProduct_categoriess,
  getProduct_categoriesById,
  getProduct_categoriesByEmail,
  updateProduct_categoriesById,
  deleteProduct_categoriesById,
};