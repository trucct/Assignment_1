const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { appared_sizeService } = require('../services');

const createAppared_size = catchAsync(async (req, res) => {
  const appared_size = await appared_sizeService.createAppared_size(req.body);
  res.status(httpStatus.CREATED).send(appared_size);
});

const getAppared_sizes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await appared_sizeService.queryAppared_sizes(filter, options);
  res.send(result);
});

const getAppared_size = catchAsync(async (req, res) => {
  const appared_size = await appared_sizeService.getAppared_sizeById(req.params.appared_sizeId);
  if (!appared_size) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appared_size not found');
  }
  res.send(appared_size);
});

const updateAppared_size = catchAsync(async (req, res) => {
  const appared_size = await appared_sizeService.updateAppared_sizeById(req.params.appared_sizeId, req.body);
  res.send(appared_size);
});

const deleteAppared_size = catchAsync(async (req, res) => {
  await appared_sizeService.deleteAppared_sizeById(req.params.appared_sizeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAppared_size,
  getAppared_sizes,
  getAppared_size,
  updateAppared_size,
  deleteAppared_size,
};