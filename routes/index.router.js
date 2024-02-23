const router = require('express').Router();

// views
const mainRouter = require('./views/main.router');

// api

// route views
router.use('/', mainRouter);

// route api
const authViewRouter = require('./views/auth.view.router');
const authApiRouter = require('./api/auth.api.router');


router.use('/api', authApiRouter);
router.use('/registration', authViewRouter);

const questionViewRouter = require('./views/question.view.router');

router.use('/api', authApiRouter);
router.use('/registration', authViewRouter);

router.use('/question', questionViewRouter);


module.exports = router;
