const db = require('../config/db');

// Discovery Vault generic mock route (stub for DB interopt)
const getVaultData = async (req, res) => {
    try {
        const blueprintsResult = await db.query('SELECT * FROM vault_blueprints ORDER BY id ASC');
        const trackerResult = await db.query('SELECT * FROM cutover_tracker ORDER BY id ASC');
        
        res.status(200).json({ 
            blueprints: blueprintsResult.rows, 
            tracker: trackerResult.rows 
        });
    } catch (err) {
        console.error('Error fetching vault data:', err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getVaultData };
