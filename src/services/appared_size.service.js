const httpStatus = require('http-status');
const { Appared_size } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a appared_size
 * @param {Object} appared_sizeBody
 * @returns {Promise<Appared_size>}
 */
const createAppared_size = async (appared_sizeBody) => {
  return Appared_size.create(appared_sizeBody);
};

/**
 * Query for appared_sizes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAppared_sizes = async (filter, options) => {
  const appared_sizes = await Appared_size.paginate(filter, options);
  return appared_sizes;
};

/**
 * Get appared_size by id
 * @param {ObjectId} id
 * @returns {Promise<Appared_size>}
 */
const getAppared_sizeById = async (id) => {
  return Appared_size.findById(id);
};

/**
 * Get appared_size by email
 * @param {string} email
 * @returns {Promise<Appared_size>}
 */
const getAppared_sizeByEmail = async (email) => {
  return Appared_size.findOne({ email });
};

/**
 * Update appared_size by id
 * @param {ObjectId} appared_sizeId
 * @param {Object} updateBody
 * @returns {Promise<Appared_size>}
 */
const updateAppared_sizeById = async (appared_sizeId, updateBody) => {
  const appared_size = await getAppared_sizeById(appared_sizeId);
  if (!appared_size) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appared_size not found');
  }
  if (updateBody.email && (await Appared_size.isEmailTaken(updateBody.email, appared_sizeId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(appared_size, updateBody);
  await appared_size.save();
  return appared_size;
};

/**
 * Delete appared_size by id
 * @param {ObjectId} appared_sizeId
 * @returns {Promise<Appared_size>}
 */
const deleteAppared_sizeById = async (appared_sizeId) => {
  const appared_size = await getAppared_sizeById(appared_sizeId);
  if (!appared_size) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appared_size not found');
  }
  await appared_size.remove();
  return appared_size;
};

module.exports = {
  createAppared_size,
  queryAppared_sizes,
  getAppared_sizeById,
  getAppared_sizeByEmail,
  updateAppared_sizeById,
  deleteAppared_sizeById,
};