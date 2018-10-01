const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next()
});

router.use('/', require('./homepage'))

module.exports = router;