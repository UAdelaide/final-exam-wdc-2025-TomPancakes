var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// return list of dogs
app.get('/api/dogs', async (req, res) => {
    try {
      const [rows] = await connection.execute(
        SELECT d.dog_name, d.size, u.username AS owner_username
        FROM dogs d
        JOIN users u ON d.owner_id = u.id
      );
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch dogs' });
    }
  });

// return walk requests
  app.get('/api/walkrequests/open', async (req, res) => {
    try {
      const [rows] = await connection.execute(
        SELECT wr.id AS request_id, d.dog_name, wr.requested_time, wr.duration_minutes, wr.location, u.username AS owner_username
        FROM walkrequests wr
        JOIN dogs d ON wr.dog_id = d.id
        JOIN users u ON wr.owner_id = u.id
        WHERE wr.status = 'open'
      );
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch open walk requests' });
    }
  });

//return summary of each walker