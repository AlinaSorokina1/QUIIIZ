const router = require('express').Router();

// views
const mainRouter = require('./views/main.router');

// api

// route views
router.use('/', mainRouter);

// route api

module.exports = router;
