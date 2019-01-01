function callToAnotherFunction( callback ) {
    console.log("I'm going to call to another function")
    callback(123)
}

callToAnotherFunction(function(param) {
    console.log("Console log: "+ param)
})

var create = function (req, res) {
    async.waterfall(
        [
            function _function1 (req) {
                return function (callback) {
                    var something = req.body
                    callback (null, something)
                }
            },
            function _function2 (something, callback) {
                return function (callback) {
                    var somethingelse = function () { //'do something here' };
                        callback(err, somethingelse)
                    }
                }
            },
            function _function3 (something, callback) {
                return function (callback) {
                    var somethingmore = function () { //'do something here' }
                        callback(err, somethingmore)
                    }
                }
            }
        ],
        function (error, success) {
            if (error) { alert('Something is wrong!') }
            return alert('Done!')
        }
    )
}