const express = require('express');
const pool = require('./db');

const app = express();

app.get('/messages', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM kafka_messages ORDER BY id DESC'
  );

  res.json(result.rows);
});

app.get('/messages/:id', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM kafka_messages WHERE id = $1',
    [req.params.id]
  );

  res.json(result.rows[0]);
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});