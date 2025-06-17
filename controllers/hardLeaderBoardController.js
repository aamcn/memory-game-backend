const express = require('express')
const query = require('../db/hardLeaderBoardQueries')

async function getAllHardScores(req, res){
    const allScores = await query.getAllHardScores()
    res.send(allScores.rows)
}

async function getHardScoreById(req, res){
    const id = req.body.id
    const score = await query.getHardScoreById(id)
    res.send(score.rows)
}

async function addHardHighScorer(req, res){
    await query.addHardHighScorer(2, 'han', 29, 9)
    res.send(200)
}

module.exports = {
    getAllHardScores,
    getHardScoreById, 
    addHardHighScorer,
} 

