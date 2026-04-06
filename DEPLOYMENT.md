# 1HubSolutions - Hostinger Deployment Guide

This guide outlines the exact steps to deploy the high-performance 1HubSolutions platform to your Hostinger VPS or Node-supported environment.

## 1. Prerequisites
- **Node.js v18+** installed on the server.
- **PostgreSQL** installed (locally or via Hostinger's managed DB).
- **PM2** installed globally: `npm install -g pm2`.

## 2. Option A: Git Automation (Recommended)
Hostinger has a built-in Git Integration feature. 
1.  **Connect to GitHub**: In your Hostinger Panel, go to **Advanced > Git**.
2.  **Repo URL**: Paste `https://github.com/shams96/1hubsolutions.git`.
3.  **Automatic Build**: When you click "Deploy", Hostinger will automatically run `npm install`, which triggers our **postinstall** script to build the entire dashboard for you.

## 2. Option B: Manual Upload (FTP/File Manager)
1.  **Build Locally**: From the root directory, run `npm run build`.
2.  **Upload**: Upload the entire `1hubsolutions` folder to your server (excluding `node_modules`).
3.  **Install Dependencies**: Run `npm run install:all` on the server.

3.  **Environment Setup**: Update `backend/.env` with your Hostinger database credentials:
    ```env
    DATABASE_URL=postgres://user:pass@host:port/dbname
    JWT_SECRET=your_unique_secret
    PORT=5000
    ```

## 4. Initialize Database
Run the schema initializer to set up your tables and initial admin account:
```bash
npm run db:init
```

## 5. Launch with PM2
To ensure your app stays online 24/7, use the provided ecosystem config:
```bash
cd backend
pm2 start ecosystem.config.js
pm2 save
```

## 6. Port Forwarding / Nginx (VPS Only)
If you are on a VPS, ensure your firewall allows port `5000` or set up an Nginx reverse proxy to map your domain to `http://localhost:5000`.

---
**1HubSolutions Hub - Node.js Production Engine**
© 2026 Shams Islam
