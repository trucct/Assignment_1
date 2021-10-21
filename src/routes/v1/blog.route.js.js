const express = require('express');
const {blogController} = require('../../controllers');

const router = express.Router();

router.route('/').post(trucController.createTruc);
module.exports = router;