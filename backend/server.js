const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Security Middleware (Clean Core Standards)
app.use(helmet()); 
// Allows the frontend app (on whatever port, e.g. 5173 for Vite local dev) or production URL
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

// Routes
const auditRoutes = require('./src/controllers/audit');
// Middleware example usage
const authMiddleware = require('./src/middleware/auth');

// Audit Route configuration
app.use('/api/v1/audit-request', auditRoutes);

// Discovery Vault generic mock route (stub for DB interopt)
app.get('/api/v1/vault', authMiddleware, (req, res) => {
    res.status(200).json({ data: "Secure Vault Blueprints Loaded" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`1HubSolutions Node.js Engine running on port ${PORT}`));
