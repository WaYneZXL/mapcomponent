const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  const users = [
    {id: 1, firstName: 'Chris'},
    {id: 2, firstName: 'Edward'},
    {id: 3, firstName: 'Khubaib'},
  ];

  res.json(users);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);