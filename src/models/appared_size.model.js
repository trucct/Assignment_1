const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const appared_sizeSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: String,
      required: true,
      trim: true,
    }
  }
);

// add plugin that converts mongoose to json
appared_sizeSchema.plugin(toJSON);
appared_sizeSchema.plugin(paginate);

/**
 * @typedef Appared_size
 */
const Appared_size = mongoose.model('Appared_size', appared_sizeSchema);

module.exports = Appared_size;