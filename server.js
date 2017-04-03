/**
 * Dependencies
 */
const express = require('express');

/**
 * Environment / configuration
 */
const port = process.env.PORT || 3000;

/**
 * Create our express app
 */
const app = express();

/**
 * Serve static files from the appropriate folder
 */
app.use(express.static(`${__dirname}/docs`));

/**
 * Attach server to port
 */
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
