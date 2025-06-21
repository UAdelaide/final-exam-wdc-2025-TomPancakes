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
      res.status(500).json({ error: 'Failed to fetch walk requests' });
    }
  });

// return summary of each walker
app.get('/api/walkers/summary', async (req, res) => {
    try {
      const [rows] = await connection.execute(
        SELECT
          u.username AS walker_username,
          COUNT(w.rating) AS total_ratings,
          AVG(w.rating) AS average_rating,
          COUNT(w.id) AS completed_walks
        FROM users u
        LEFT JOIN walks w ON u.id = w.walker_id
        WHERE u.type = 'walker'
        GROUP BY u.id
      );
      // avg(rating) might be null if no ratings - that's expected
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch walkers summary' });
    }
  });

