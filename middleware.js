// middleware.js

require('dotenv').config();

const apiKey = process.env.API_KEY;

const verifyApiKey = (req, res, next) => {
  const { key } = req.body;
  if (key === apiKey) {
    next();
  } else {
    res.status(403).send('Unauthorized');
  }
};

module.exports = verifyApiKey;
