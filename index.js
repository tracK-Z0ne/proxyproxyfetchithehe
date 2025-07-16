const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/jupiter-tokens", async (req, res) => {
  try {
    const response = await axios.get("https://token.jup.ag/all");
    res.json(response.data);
  } catch (err) {
    console.error("❌ Failed to fetch Jupiter tokens:", err.message);
    res.status(500).json({ error: "Failed to fetch tokens" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running on port ${PORT}`);
});
