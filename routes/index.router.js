const router = require('express').Router();

// views
const mainRouter = require('./views/main.router');
const authViewRouter = require('./views/auth.view.router');
const authApiRouter = require('./api/auth.api.router');
const questionViewRouter = require('./views/question.view.router');
const errRouter = require('./views/incorrect.router');
// api

// route views
router.use('/', mainRouter);
router.use('/api', authApiRouter)
router.use('/registration', authViewRouter)
router.use('/question', questionViewRouter);

// route api





router.use('*', errRouter);
module.exports = router;
