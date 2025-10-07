const db = require('../database/connection');

exports.getProfile = async (req, res) => {
  try {
    const admin = await db.Admin.findByPk(req.admin?.id, { attributes: ['id', 'username', 'role', 'createdAt', 'updatedAt'] });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.json(admin);
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const admin = await db.Admin.findByPk(req.admin?.id);
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    const { username, password } = req.body;
    if (username) admin.username = username;
    if (password) admin.password = password; // hashed via model hook
    await admin.save();
    res.json({ id: admin.id, username: admin.username, role: admin.role, createdAt: admin.createdAt, updatedAt: admin.updatedAt });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


