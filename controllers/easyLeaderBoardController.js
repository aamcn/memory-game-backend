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
  const { playerName, finishTime } = req.body;
  await query.addEasyHighScorer(playerName, finishTime);
  res.send(200);
}

module.exports = {
  getEasyTest,
  getAllEasyScores,
  getEasyScoreById,
  addEasyHighScorer,
};
