const router = require('express').Router()
const fs = require('fs')

router.route('/movies')
    .get(function(req, res) {
        res.send('Movies Archive')
    })

router.route('/movies/:name')
    .get(function(req, res) {
        let movie = req.params.name
        fs.readFile(`./data/movies/${movie}.json`, 'utf8', function(err, data) {
            if (err) {
                res.status(404)
                res.render('404.jade', {reason: 'Movie not found'})
            }
            let movie = JSON.parse(data)
            res.render('movie.jade', movie)
        })
    })

module.exports = router