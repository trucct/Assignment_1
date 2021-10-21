const mongoose = require('mongoose');
const { toJSON, paginate} = require('./plugins');

const trucSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      require: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
trucSchema.plugin(toJSON);
trucSchema.plugin(paginate);

/**
 * @typedef Truc
 */
const Truc = mongoose.model('Truc', trucSchema);

module.exports = Truc;
