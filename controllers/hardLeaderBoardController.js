const query = require("../db/hardLeaderBoardQueries");

async function getAllHardScores(req, res) {
  const allScores = await query.getAllHardScores();
  res.send(allScores.rows);
}

async function getHardScoreById(req, res) {
      const id = req.body.id;
      const score = await query.getHardScoreById(id);
  res.send(score.rows);
}

async function addHardHighScorer(req, res) {
  const { playerName, finishTime } = req.body;
  await query.addHardHighScorer(playerName, finishTime);
  res.send(200);
}

module.exports = {
  getAllHardScores,
  getHardScoreById,
  addHardHighScorer,
};
