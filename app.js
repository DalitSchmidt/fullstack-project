const express = require('express')
const bodyParser = require('body-parser')
const app  = express()
const path = require('path')
const swig = require('swig')
const fs   = require('fs')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'swig');

app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.use('/', function(req, res) {
    res.render('homepage.html', {movies: [
        {title: "Pulp fiction", link: "/movies/pulp"},
        {title: "Pulp fiction", link: "/movies/django-unchained"},
        {title: "Pulp fiction", link: "/movies/inglourious-basterds"}
    ]})
})

app.use(require('./routes/movies'))
app.use(require('./routes/actors'))

app.use('/api', require('./routes/api/movies'))
app.use('/api', require('./routes/api/actors'))

app.use(function(req, res) {
    res.status(404)
    res.render('404.jade', {reason: "I'm not in a mood"})
})

module.exports = app