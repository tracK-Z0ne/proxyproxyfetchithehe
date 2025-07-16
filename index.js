const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Proxy server is live.");
});

app.get("/jupiter-tokens", async (req, res) => {
  try {
    const response = await axios.get("https://token.jup.ag/all", { timeout: 10000 });
    res.json(response.data);
  } catch (error) {
    console.error("❌ Proxy fetch error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Proxy server running on port ${PORT}`);
});
