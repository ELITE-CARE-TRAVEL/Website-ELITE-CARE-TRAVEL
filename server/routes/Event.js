const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/Admin');
const EventController = require('../controllers/Event');

router.get('/events', EventController.list);
router.post('/events', verifyToken, EventController.create);
router.put('/events/:id', verifyToken, EventController.update);
router.delete('/events/:id', verifyToken, EventController.remove);

module.exports = router;

