const express = require('express')
const query = require('../db/leaderBoardQueries')

async function getAllScores(req, res){
    const allScores = await query.getAllScores()
    res.send(allScores.rows[0])
}

async function getScoreById(req, res){
    const score = await query.getScoreById(1)
    res.send(score.rows[0])
}

async function addHighScorer(req, res){
    await query.addHighScorer(2, 'han', 29, 9)
    res.send(200)
}

getScoreById
module.exports = {
    getAllScores,
    getScoreById, 
    addHighScorer
} 