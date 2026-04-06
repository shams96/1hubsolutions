const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Discovery Audit Route - Persists requests to PostgreSQL
router.post('/', async (req, res) => {
    const { source, ...payload } = req.body;
    
    try {
        await db.query(
            'INSERT INTO audit_requests (source, payload) VALUES ($1, $2)',
            [source || 'Landing Page', JSON.stringify(payload)]
        );
        
        console.log("Audit request persisted from:", source);
        res.status(200).json({ message: "Assessment Scheduled", status: "success" });
    } catch (err) {
        console.error('Error persisting audit request:', err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;

