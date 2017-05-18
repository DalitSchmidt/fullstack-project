/*
 * Definition the models: express, bodyParser, path, jade and fs as constants in order to receive their abilities
 * All the capabilities of the module 'express' by setting the variable app const
 * Sets the port that the server listens as const
 */
const express = require('express')
const bodyParser = require('body-parser')
const app  = express()
const path = require('path')
const jade = require('jade')
const fs   = require('fs')

app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

// Regular HTML routes
app.use('/', require('./routes/movies'));
app.use('/', require('./routes/actors'));

// REST API routes
app.use('/api', require('./routes/api/movies'));
app.use('/api', require('./routes/api/actors'));

/*
 * As we get an error containing the status page 404 says we were looking for is not found
 * And we actually refer to a file '404.jade' and display the error message
 */
app.use(function(req, res) {
    res.status(404)
    res.render('404.jade', {reason: "I'm not in a mood"})
})

module.exports = app