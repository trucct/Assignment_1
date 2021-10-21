const { blog } = require('../models');
/**
 * Create a blog
 * @param {Object} blogBody
 * @returns {Promise<blog>}
 */
const createTruc = async (blogBody) => {
  return Blog.create(blogBody);
};

module.exports = {
  createBlog,
};
