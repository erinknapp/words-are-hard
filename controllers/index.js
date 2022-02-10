const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const feedRoutes = require('./feed-routes.js');

router.use('/', homeRoutes);
router.use('/feed', feedRoutes);
router.use('/api', apiRoutes);

module.exports = router;
