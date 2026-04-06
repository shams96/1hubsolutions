const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

async function initDb() {
  const client = await pool.connect();
  try {
    console.log('Initializing 1HubSolutions - Node.js Database Engine...');

    // 1. Users Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2. Vault Blueprints Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS vault_blueprints (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        status VARCHAR(50) NOT NULL,
        icon VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 3. Cutover Tracker Table
    await client.query(`
       CREATE TABLE IF NOT EXISTS cutover_tracker (
         id SERIAL PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         status VARCHAR(50) NOT NULL,
         subtext TEXT,
         progress INTEGER DEFAULT 0,
         color VARCHAR(20) DEFAULT 'blue',
         completed BOOLEAN DEFAULT FALSE,
         time VARCHAR(50),
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
       )
    `);

    // 4. Audit Requests Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS audit_requests (
        id SERIAL PRIMARY KEY,
        source VARCHAR(255),
        payload JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // --- Seeding ---
    
    // Seed Admin User
    const adminEmail = 'admin@1hubsolutions.com';
    const existingUser = await client.query('SELECT * FROM users WHERE email = $1', [adminEmail]);
    if (existingUser.rows.length === 0) {
      const hashedPassword = await bcrypt.hash('password123', 10);
      await client.query(
        'INSERT INTO users (email, password_hash) VALUES ($1, $2)',
        [adminEmail, hashedPassword]
      );
      console.log('Seed: Admin account created.');
    }

    // Seed Vault Blueprints (if empty)
    const vaultCount = await client.query('SELECT COUNT(*) FROM vault_blueprints');
    if (parseInt(vaultCount.rows[0].count) === 0) {
      const blueprints = [
        ['S/4HANA Arch Design', 'PDF', 'Secure', 'FileText'],
        ['BRIM Config Specs', 'PDF', 'Secure', 'FileText'],
        ['NS2 Compliance Audit', 'RESTRICTED', 'Restricted', 'FileText']
      ];
      for (const b of blueprints) {
        await client.query(
          'INSERT INTO vault_blueprints (title, type, status, icon) VALUES ($1, $2, $3, $4)',
          b
        );
      }
      console.log('Seed: Vault Blueprints created.');
    }

    // Seed Tracker (if empty)
    const trackerCount = await client.query('SELECT COUNT(*) FROM cutover_tracker');
    if (parseInt(trackerCount.rows[0].count) === 0) {
      await client.query(`
        INSERT INTO cutover_tracker (title, status, subtext, time, color, completed) 
        VALUES ('Legacy DB Snapshot', 'COMPLETED', 'Data hardened. Fallback ready.', '11:20 Z', 'green', TRUE)
      `);
      await client.query(`
        INSERT INTO cutover_tracker (title, status, subtext, progress, color, completed) 
        VALUES ('Migration to S/4HANA Clean Core', 'IN PROGRESS', 'Syncing custom Z-Codes to AI Agents.', 68, 'blue', FALSE)
      `);
      await client.query(`
        INSERT INTO cutover_tracker (title, status, subtext, color, completed) 
        VALUES ('BRIM ASC 606 Stabilization', 'PENDING', 'Waiting for Core Migration to complete.', 'gray', FALSE)
      `);
      console.log('Seed: Cutover Tracker created.');
    }

    console.log('Initialization Complete.');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    client.release();
    process.exit();
  }
}

initDb();
