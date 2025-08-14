const express = require("express");
const query = require("../db/easyLeaderBoardQueries");




async function getEasyTest(req, res) {
  
  res.send('Success');
}

async function getAllEasyScores(req, res) {
  const allScores = await query.getAllEasyScores();
  res.send(allScores.rows);
}

async function getEasyScoreById(req, res) {
  const id = req.body.id;
  const score = await query.getEasyScoreById(id);
  res.send(score.rows);
}

async function addEasyHighScorer(req, res) {
  await query.addEasyHighScorer(2, "han", 29, 9);
  res.send(200);
}

module.exports = {
  getEasyTest,
  getAllEasyScores,
  getEasyScoreById,
  addEasyHighScorer,
};
