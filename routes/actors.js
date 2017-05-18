const router = require('express').Router()
const fs = require('fs')

router.route('/actors')
    .get(function(req, res) {
    })

/*
 * Response for HTML with Jade view engine
 * When execute a get request to path '/api/movie/:name', the 'movie' variable allows to send a request with the parameter name and actually get the title database
 * The module 'fs' calls to json file whose name is based on the data
 * If an error message is displayed in the console window, as no error the variable 'movie' make 'JSON.parse' to 'data' variable
 * It will eventually be displayed all data present in the json file with the file 'movie.jade'
 */
router.route('/actors/:name')
    .get(function(req, res) {
        let actor = req.params.name
        fs.readFile(`./data/actors/${actor}.json`, 'utf8', function(err, data) {
            if (err) return console.log(err)
            let actor = JSON.parse(data)
            res.render('actor.jade', actor)
        })
    })

module.exports = router