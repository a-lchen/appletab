// imports express
const express = require('express')

// makes an express app
const app = express();

// if we ever access url /, return something (return it in res.send)
app.get('/rachel', (req, res) => {
  res.send('Loves Alex!')
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});

// listen on the port 8000 of server
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
