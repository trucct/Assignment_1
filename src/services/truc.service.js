const httpStatus = require('http-status');
const { Truc } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a truc
 * @param {Object} trucBody
 * @returns {Promise<truc>}
 */
const createTruc = async (trucBody) => {
  
  return Truc.create(trucBody);
};

/**
 * Query for trucs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTrucs = async (filter, options) => {
  const trucs = await Truc.paginate(filter, options);
  return trucs;
};

module.exports = {
  createTruc,
  queryTrucs,
};
