const router = require('express').Router();

const authViewRouter = require('./views/auth.view.router')
const authApiRouter = require('./api/auth.api.router')

router.use('/auth', authApiRouter)
router.use('/auth', authViewRouter)

module.exports = router;