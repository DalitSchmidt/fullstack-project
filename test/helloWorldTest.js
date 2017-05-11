const request = require("request")
const base_url = "http://localhost/"

describe("Server is working", function() {
    describe("GET /", function() {
        it("returns status code 200", function() {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
            });
        });
    });
});