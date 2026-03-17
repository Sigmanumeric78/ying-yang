const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { optionalAuth } = require('./middleware/auth');
const { submitResult } = require('./routes/results');
const { getLeaderboard } = require('./routes/leaderboard');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ status: 'online', project: 'Yin and Yang' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/results', optionalAuth, submitResult);

app.get('/api/leaderboard', getLeaderboard);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
