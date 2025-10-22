const db = require('./database/connection');

async function resetAdmin() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connected');

        // Delete existing admin
        await db.Admin.destroy({ where: { username: 'admin2007' } });
        console.log('Old admin deleted');

        // Create new admin
        await db.Admin.create({
            username: 'admin2007',
            password: 'admin2007',
            role: 'admin'
        });
        console.log('✅ New admin created: admin2007/admin2007');
        
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

resetAdmin();
