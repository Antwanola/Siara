const router = require('express').Router()

router.use('/api', require('./app/Auth'))
router.use('/api', require('./app/formSubmitionRoute'))
router.use('/api/admin', require('./admin/index'))

module.exports = router;