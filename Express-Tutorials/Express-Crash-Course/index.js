const exphbs = require('express-handlebars')
const express = require('express');  // import express from 'express'
const path = require('path');
const logger = require('./middleware/logger')
const members = require('./members')

const app = express();

//Init middleware
//app.use(logger);

// Handlebars Middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Homepage route (index.handlebars)
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))

// Set public folder as static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 3000; //check if port # in env file first

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));