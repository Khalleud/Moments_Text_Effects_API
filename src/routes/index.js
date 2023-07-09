const express = require('express');
const textEffectRouter = require('./textEffect');

const router = express.Router();

router.use('/textEffect', textEffectRouter);

module.exports = router;