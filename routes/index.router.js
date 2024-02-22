const router = require('express').Router();

const authViewRouter = require('./views/auth.view.router')
const authApiRouter = require('./api/auth.api.router')

router.use('/api', authApiRouter)
router.use('/registration', authViewRouter)


module.exports = router;