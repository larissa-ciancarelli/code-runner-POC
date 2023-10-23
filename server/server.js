const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/styles.css', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../styles.css'))
})

app.listen(3000, () => {
  console.log('server listening on port 3000...');
});
