const db = require('../database/connection');

exports.list = async (req, res) => {
  try {
    const items = await db.Event.findAll({ order: [['startDate', 'ASC']] });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, startDate, endDate, calendar, allDay, notes } = req.body;
    if (!title || !startDate) return res.status(400).json({ error: 'title and startDate are required' });
    const item = await db.Event.create({ title, startDate, endDate, calendar, allDay, notes });
    res.status(201).json(item);
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await db.Event.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    await item.update(req.body);
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await db.Event.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    await item.destroy();
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


