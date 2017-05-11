const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 80
const path = require('path')
const jade = require('jade')
const fs   = require('fs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/*
 * REST API Routes
 */
app.get('/api/movie/:name', function(req, res) {
    let movie = req.params.name
    fs.readFile(`./data/${movie}.json`, 'utf8', function(err, data) {
        if (err) return console.log(err)
        res.setHeader("Content-Type", "application/json");
        res.write(data);
        res.end();
    })
})

app.post('/api/movie', function(req, res) {
    let new_movie = req.body
    res.send()
    res.end()
})

// Response for HTML with Jade view engine
app.get('/movie/:name', function(req, res) {
    let movie = req.params.name
    fs.readFile(`./data/${movie}.json`, 'utf8', function(err, data) {
        if (err) return console.log(err)
        let movie = JSON.parse(data);
        res.render('movie.jade', movie)
    })
})

app.use(function(req, res) {
    res.status(404)
    res.render('404.jade', {reason: "I'm not in a mood"})
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})