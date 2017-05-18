const app = require('../app')

app.set('port', process.env.PORT || 3000)

/*
 * The server listens to the configured port and displays a message in the console window
 * to which port it is listening to
 */
const server = app.listen(app.get('port'), function() {
    console.log(`Express server listening on port ${server.address().port}`)
})