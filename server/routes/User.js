const express = require('express');
const router = express.Router();
const { createContact, getAllUsers } = require('../controllers/User');

router.post('/contact', createContact);
router.get('/users', getAllUsers);

module.exports = router;
