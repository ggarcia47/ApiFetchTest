const express = require('express');
const router = express.Router();

router.use('/api', require('./countriesRoute'));

module.exports = router;