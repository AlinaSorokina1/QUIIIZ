const router = require('express').Router();

const authViewRouter = require('./views/auth.view.router');
const authApiRouter = require('./api/auth.api.router');


const questionViewRouter = require('./views/question.view.router');
// const questionApiRouter = require('./api/question.api.router');

router.use('/api', authApiRouter)
router.use('/registration', authViewRouter)

router.use('/auth', authApiRouter);
router.use('/auth', authViewRouter);

router.use('/question', questionViewRouter);
// router.use('/question', questionApiRouter);

module.exports = router;
