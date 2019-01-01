const router = require('express').Router()
const fs = require('fs')

router.route('/actors')
    .get(function(req, res) {
    })

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