const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'components', 'Quick_3D_RPG-main', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
