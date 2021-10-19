const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { trucService } = require('../services');

const createTruc = catchAsync(async (req, res) => {
  const truc = await trucService.createTruc(req.body);
  res.status(httpStatus.CREATED).send(truc);
});

const getTrucs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await trucService.queryTrucs(filter, options);
  res.send(result);
});

module.exports = {
  createTruc,
   createTruc,
  createTruc,
  getTrucs,
};
