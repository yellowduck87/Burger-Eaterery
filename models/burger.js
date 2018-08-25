var orm = require("../config/orm.js");

var burger = {
 selectAll: selectAll,
 insertOne: insertOne,
 updateOne: updateOne
}

function selectAll(cb) {
    orm.selectAll("burgers", function(res){
        cb(res)
    })
}
 function insertOne(vals, cb) {
    orm.insertOne(vals, function(res) {
        cb(res);
    })
}
function updateOne(condition, cb) {
    orm.updateOne(condition, function(res) {
        cb(res)
    })
}
module.exports = burger