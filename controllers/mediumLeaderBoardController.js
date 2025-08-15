const query = require("../db/mediumLeaderBoardQueries");

async function getAllMediumScores(req, res) {
  const allScores = await query.getAllHardScores();
  res.send(allScores.rows);
}

async function getMediumScoreById(req, res) {
  const id = req.body.id;
  const score = await query.getHardScoreById(id);
  res.send(score.rows);
}

async function addMediumHighScorer(req, res) {
  const { playerName, finishTime } = req.body;
  await query.addMediumHighScorer(playerName, finishTime);
  res.send(200);
}

module.exports = {
  getAllMediumScores,
  getMediumScoreById,
  addMediumHighScorer,
};
