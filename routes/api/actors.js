const router = require('express').Router()
const fs = require('fs')

router.route('/actors')
    .post(function(req, res) {

    })

    .get(function(req, res) {

    })

router.route('/actors/:name')
    .get(function( req, res ) {
        let actor = req.params.name
        fs.readFile(`./data/actors/${actor}.json`, 'utf8', function(err, data) {
            if (err) return console.log(err)
            res.setHeader("Content-Type", "application/json")
            res.write(data);
            res.end();
        })
    })

    .put(function(req, res) {
        let new_actor = req.body
        res.send()
        res.end()
    })

    .delete(function(req, res) {

    })

module.exports = router