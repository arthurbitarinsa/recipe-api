// // index.js

// const express = require('express');
// const dishes = require('./dishes');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Route to get the whole list of dishes
// app.get('/', (req, res) => {
//   res.json(dishes);
// });

// // Route for each dish
// dishes.forEach((dish, index) => {
//   app.get(`/dish${index + 1}`, (req, res) => {
//     res.json(dish);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // index.js  block all requests unless correct key is provided

// const express = require('express');
// const dishes = require('./dishes');
// const verifyApiKey = require('./middleware');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // Middleware to verify API key
// app.use(express.json());
// app.use(verifyApiKey);

// // Routes
// app.get('/', (req, res) => {
//   res.json(dishes);
// });

// dishes.forEach((dish, index) => {
//   app.get(`/dish${index + 1}`, (req, res) => {
//     res.json(dish);
//   });
// });

// app.get('/info', (req, res) => {
//   res.sendFile(__dirname + '/info.html');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

