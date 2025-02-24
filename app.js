const path = require('path');

const express = require('express');

const blogRoutes = require('./routes/blog');

const app = express();

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(blogRoutes);

app.use(function (req, res, next) {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).render('500');
});

app.listen(3000);
