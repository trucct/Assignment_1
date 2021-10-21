const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const product_categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }
  }
);

// add plugin that converts mongoose to json
product_categoriesSchema.plugin(toJSON);
product_categoriesSchema.plugin(paginate);

/**
 * @typedef Product_categories
 */
const Product_categories = mongoose.model('Product_categories', product_categoriesSchema);

module.exports = Product_categories;