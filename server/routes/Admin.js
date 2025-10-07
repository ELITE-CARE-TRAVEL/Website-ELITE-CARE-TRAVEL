const express = require('express');
const router = express.Router();
const { login, verifyToken } = require('../controllers/Admin');

// Admin authentication
router.post('/admin/login', login);

// (no protected admin endpoints yet)

module.exports = router;

