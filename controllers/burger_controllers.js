var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgObj = {
            burgers: data
        };
        res.render("index", burgObj)
    })
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        req.body.name
    ], function (result) {
        res.json({
            id: result.insertId
        })
    })
})

router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;

    burger.updateOne(condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end()
        })
})

module.exports = router