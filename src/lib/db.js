import mysql from "mysql2/promise";

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",   // fallback localhost
  user: process.env.DB_USER || "root",        // fallback root
  password: process.env.DB_PASSWORD || "",    // fallback empty password
  database: process.env.DB_NAME || "portfolio_db",
});

export default pool;
