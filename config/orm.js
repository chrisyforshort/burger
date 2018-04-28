// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    // selectAll() //
    selectAll: function() {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res)
        })
    },

    // insertOne() //
    insertOne: function(name) {
        var queryString = "INSERT INTO burgers (name, devoured) VALUES (" + name + ", false)"
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res)
        })
    },

    // updateOne() //
    updateOne: function(name) {
        var queryString = "UPDATE burgers SET (name, devoured) WHERE (" + name + ", false)"
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res)
        })
    },
}

// Export the orm object //
module.exports = orm