const express = require('express');
const path = require('path');
const app = express();

// static files serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

// default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// server run karo
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

