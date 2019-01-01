const request = require('request')
const fs = require('fs')
const API_KEY = 'd2220675c9056d94d3c8b25b773b18f06afde2e6'

module.exports = function ( movie_name, callback ) {
    request(`http://api-public.guidebox.com/v2/search?type=movie&field=title&query=${movie_name}&api_key=${API_KEY}`, function ( error, response, body ) {
        let data = JSON.parse( body )
        if ( data.total_result < 1 )
            let error = new Error('Movie not found')
        let movie = JSON.stringify( data.results[0] )

        callback( movie, error )
    })
}