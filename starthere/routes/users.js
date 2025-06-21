var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


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

  