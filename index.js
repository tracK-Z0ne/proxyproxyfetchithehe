const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/jupiter-tokens', async (req, res) => {
  try {
    const response = await axios.get('https://token.jup.ag/all');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Jupiter fetch error:', error.message);
    res.status(500).json({ error: 'Jupiter API failed' });
  }
});

app.get('/birdeye-token/:address', async (req, res) => {
  try {
    const response = await axios.get(`https://public-api.birdeye.so/public/token/${req.params.address}`);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Birdeye fetch error:', error.message);
    res.status(500).json({ error: 'Birdeye API failed' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running on port ${PORT}`);
});
