const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/Admin');
const AdminProfile = require('../controllers/AdminProfile');

router.get('/admin/profile', verifyToken, AdminProfile.getProfile);
router.put('/admin/profile', verifyToken, AdminProfile.updateProfile);

module.exports = router;

