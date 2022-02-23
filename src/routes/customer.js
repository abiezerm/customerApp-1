const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();


router.get('/', customerController.list);
router.post('/add', customerController.save);




module.exports = router;