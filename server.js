const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const PORT = 5000;

// PostgreSQL Connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "inventory_db",
    password: "Blueeyes2002^", // Replace with your actual password
    port: 5432,
});

pool.connect()
    .then(() => console.log("✅ Connected to PostgreSQL"))
    .catch(err => console.error("❌ Connection error", err.stack));

// Middleware
app.use(express.json());
app.use(express.static("public")); // Serve static files (HTML, JS, CSS)

// Default Route for Testing
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Fetch all items (Fixed: Changed "inventory" → "items")
app.get("/items", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM items"); // Fixed table name
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Add new item (Fixed table name)
app.post("/items", async (req, res) => {
    const { itemname, cost } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO items (itemname, cost) VALUES ($1, $2) RETURNING *", // Fixed table name
            [itemname, cost]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete item by ID (Fixed table name)
app.delete("/items/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM items WHERE itemid = $1", [id]); // Fixed table name
        res.json({ message: `Item ${id} deleted` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});