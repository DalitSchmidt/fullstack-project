const router = require('express').Router()
const fs = require('fs')

router.route('/movies')
    .post(function(req, res) {

    })

    .get(function(req, res) {

    })

// REST API Routes
router.route('/movies/:name')
    /*
     * When execute a get request to path '/api/movie/:name',
     * the 'movie' variable allows to send a request with the parameter name and
     * actually get the title database
     * The module 'fs' calls to json file whose name is based on the data
     * If an error message is displayed in the window console and not get error
     * that sent 'json/application' type and display the data present in
     * the variable 'data'
     */
    .get(function( req, res ) {
        let movie = req.params.name
        fs.readFile(`./data/movies/${movie}.json`, 'utf8', function(err, data) {
            if (err) return console.log(err)
            res.setHeader("Content-Type", "application/json")
            res.write(data);
            res.end();
        })
    })

    /*
     * When execute a post request to path '/api/movie', the 'new_movie' variable entry
     * allows to send the body so we actually get the data has
     */
    .put(function(req, res) {
        let new_movie = req.body
        res.send()
        res.end()
    })

    .delete(function(req, res) {

    })

module.exports = router