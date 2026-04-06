const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/db');

// Secure controller for authentication using PostgreSQL
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Query the users table for the given email
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Securely compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (isMatch) {
            const token = jwt.sign(
                { id: user.id, role: user.role, email: user.email },
                process.env.JWT_SECRET || 'fallback_secret',
                { expiresIn: process.env.JWT_EXPIRES_IN || '2h' }
            );
            return res.status(200).json({ token, message: "Login successful" });
        }

        return res.status(401).json({ message: "Invalid credentials" });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { login };

