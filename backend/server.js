const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false, // Fix for React inline styles/scripts in CSP
})); 
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

// Brute-force protection for login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per window
  message: { message: "Too many login attempts. Please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// API Routes
const auditRoutes = require('./src/controllers/audit');
const { login } = require('./src/controllers/auth');
const { getVaultData } = require('./src/controllers/vault');

const authMiddleware = require('./src/middleware/auth');

app.use('/api/v1/audit-request', auditRoutes);
app.post('/api/v1/auth/login', loginLimiter, login);
app.get('/api/v1/vault', authMiddleware, getVaultData);

// --- Static Serving (Hostinger Production Readiness) ---

// Serve static assets from the React frontend build
const frontendDistPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDistPath));

// Catch-all route to serve index.html for React Router (Single Page Application)
app.get('*', (req, res) => {
    // Only serve index.html if it's not an API call
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: "API endpoint not found" });
    }
    res.sendFile(path.join(frontendDistPath, 'index.html'), (err) => {
        if (err) {
            res.status(500).send("The high-performance UI build was not found. Please run 'npm run build' in the root directory.");
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`1HubSolutions Production Engine running on port ${PORT}`));


