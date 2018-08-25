var connection = require("../config/connection.js");

var orm = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
}


function selectAll(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result)
        console.log("result selectAll:" + result);
    })
}

function insertOne(vals, cb) {

    var queryString = "INSERT INTO burgers (name) VALUES (?)";
    console.log(queryString)
    connection.query(queryString, vals, function (err, result) {
      
        if (err) throw err;
        console.log("res insertOne:" + result);
        cb(result)
    })
}

function updateOne(condition, cb) {
    var queryString = "UPDATE burgers SET devoured = " + 1 + " WHERE id = ?";
    connection.query(queryString, [condition], function (err, result) {
        if (err) throw err;
        console.log("res update:" + result);
        cb(result)
    })
}


module.exports = orm;