const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});