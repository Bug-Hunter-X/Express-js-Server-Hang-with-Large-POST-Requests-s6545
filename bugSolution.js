const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data asynchronously using promises
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Processing data:', data);
      resolve();
    }, 5000); // Simulate a 5-second delay
  })
  .then(() => {
    res.status(200).json({ message: 'Data received' });
  })
  .catch(err => {
    console.error('Error processing data:', err);
    res.status(500).json({ message: 'Error processing data' });
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});