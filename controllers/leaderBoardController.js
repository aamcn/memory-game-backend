const express = require('express')
const query = require('../db/leaderBoardQueries')

async function getTest(req, res){
    const t = await query.test()
    res.send(t.rows[0])
}

module.exports = {
    getTest,
} 