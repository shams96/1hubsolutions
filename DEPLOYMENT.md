# 1HubSolutions - Hostinger Deployment Guide

This guide outlines the exact steps to deploy the high-performance 1HubSolutions platform to your Hostinger VPS or Node-supported environment.

## 1. Prerequisites
- **Node.js v18+** installed on the server.
- **PostgreSQL** installed (locally or via Hostinger's managed DB).
- **PM2** installed globally: `npm install -g pm2`.

## 2. Prepare the Files
1.  **Build Frontend**: From the root directory, run:
    ```bash
    npm run build
    ```
2.  **Verify Structure**: Ensure the `frontend/dist` folder exists. This contains your optimized visual experience.

## 3. Server Configuration
1.  **Upload**: Upload the entire `1hubsolutions` folder to your server (excluding `node_modules`).
2.  **Install Dependencies**:
    ```bash
    npm run install:all
    ```
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
