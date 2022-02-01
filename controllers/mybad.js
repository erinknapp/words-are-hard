const withAuth = require('../utils/auth');

const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homepage');
});


router.get('/dashboard',withAuth, (req,res) => {
    res.render('dashboard');
});








module.exports = router