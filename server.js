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
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});



