const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const flightsRouter = require('./routes/flights');

mongoose
  .connect('mongodb+srv://veronicamhannah:Lewis@cluster0.pa9ui6x.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Start your application or perform database operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Create the Express app
const app = express();

// Set up middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Define routes
app.use('/flights', flightsRouter); // Use '/flights' as the prefix for flightsRouter

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
