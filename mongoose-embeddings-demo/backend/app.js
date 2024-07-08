const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");
const router = require("./routes/index.js");

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(bodyParser.json());

// Routes
app.use("/api/users", router);

const PORT = 3001;

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server only after successful connection
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
