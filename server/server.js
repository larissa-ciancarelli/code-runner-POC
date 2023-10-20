const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
})

// app.use('*', (req, res) => {
//   console.log('user navigated to unknown page');
//   return res.status(404).send('404 page not found');
// });

app.listen(3000, () => {
  console.log('server listening on port 3000...');
});
