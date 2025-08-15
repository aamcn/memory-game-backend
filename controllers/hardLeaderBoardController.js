const query = require("../db/hardLeaderBoardQueries");

async function getAllHardScores(req, res, next) {
  try {
    const allScores = await query.getAllHardScores();
    res.status(200).send(allScores.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

async function getHardScoreById(req, res, next) {
  const id = req.body.id;
  try {
    const score = await query.getHardScoreById(id);
    res.status(200).send(score.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

async function addHardHighScorer(req, res, next) {
  const { playerName, finishTime } = req.body;
   try {
      await query.addHardHighScorer(playerName, finishTime);
      res.status(200).send("Success");
  } catch (error) {
    next(error);  // Forward error to global handler
  }
}

module.exports = {
  getAllHardScores,
  getHardScoreById,
  addHardHighScorer,
};
