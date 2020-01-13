const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

// Body Parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving the Build File
app.use('/build', express.static(path.join(__dirname, '../build')));

// Serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// 404 Handling
app.use('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(`${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} | server/err `, err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});