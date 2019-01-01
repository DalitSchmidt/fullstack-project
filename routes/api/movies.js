const router = require('express').Router()
const fs = require('fs')
const request = require('request')
const API_KEY = 'd2220675c9056d94d3c8b25b773b18f06afde2e6'

router.route('/movies')
    .post(function(req, res) {

    })

    .get(function(req, res) {

    })

router.route('/movies/:name')
    .get(function( req, res ) {
        var movie_name = req.params.name
        fs.readFile(`./data/movies/${movie_name}.json`, 'utf8', function(err, data) {
            res.setHeader("Content-Type", "application/json")
            if (err) {
                    request(`http://api-public.guidebox.com/v2/search?type=movie&field=title&query=${movie_name}&api_key=${API_KEY}`, function (error, response, body) {
                    if ( error )
                    {
                        res.status(404);
                        res.json({error:'movie not found'});
                        res.end();
                    } else {
                        let data = JSON.parse( body )
                        
						if ( data.total_results < 1 ) {
                            res.status(404);
                            res.json({error:'movie not found'});
                            res.end();
                        } else {
                            let movie = JSON.stringify( data.results[0] )
                            fs.writeFile(`./data/movies/${movie_name}.json`, movie);
                            res.write( movie );
                            res.end();
                        }
                    }
                })
            } else {
                res.write(data);
                res.end();
            }
        })
    })

    .put(function(req, res) {
        let new_movie = req.body
        res.send()
        res.end()
    })

    .delete(function(req, res) {

    })

module.exports = router