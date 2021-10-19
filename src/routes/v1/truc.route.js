const express = require('express');
const trucController = require('../../controllers/truc.controller');

const router = express.Router();

router
  .route('/')
  .post(trucController.createTruc)
  .get(trucController.getTrucs);
module.exports = router;