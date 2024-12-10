const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from React app

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pharmacy",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Endpoint to get data
app.get("/api/medications", (req, res) => {
    const { patientId } = req.query; // Get patientId from query params
  
    if (!patientId) {
      return res.status(400).json({ error: "patientId is required" });
    }
  
    const query = "SELECT * FROM medications WHERE patientId = ?";
    db.query(query, [patientId], (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "No medications found for this patient" });
      }
      res.json(results);
    });
  });
  

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
