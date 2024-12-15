const express = require('express');
const app = express();
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connect');

const PORT = 8001;

app.use(express.json());

connectToMongoDB('mongodb://127.0.0.1:27017/urlShortner')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/url', urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 