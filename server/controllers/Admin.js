const jwt = require('jsonwebtoken');
const db = require('../database/connection');

const JWT_SECRET = process.env.JWT_SECRET || 'elite_care_travel_secret_key';

// Auto-create admin account on server start
exports.initializeAdmin = async () => {
    try {
        const adminExists = await db.Admin.findOne({ where: { username: 'admin2007' } });
        if (!adminExists) {
            await db.Admin.create({
                username: 'admin2007',
                password: 'admin2007',
                role: 'admin'
            });
            console.log('Admin account created: admin2007/admin2007');
        }
    } catch (error) {
        console.error('Error initializing admin:', error);
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        console.log('Login attempt with username:', username);
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const admin = await db.Admin.findOne({ where: { username } });
        if (!admin) {
            console.log('Admin not found for username:', username);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        console.log('Admin found, checking password...');
        const isPasswordValid = await admin.checkPassword(password);
        console.log('Password valid:', isPasswordValid);
        
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: admin.id, username: admin.username, role: admin.role },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            admin: {
                id: admin.id,
                username: admin.username,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// (no user listing in admin controller)
