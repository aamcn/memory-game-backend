const query = require("../db/mediumLeaderBoardQueries");

async function getAllMediumScores(req, res, next) {
  try {
    const allScores = await query.getAllMediumScores();
    res.status(200).send(allScores.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

async function getMediumScoreById(req, res, next) {
  const id = req.body.id;
  try {
    const score = await query.getMediumScoreById(id);
    res.status(200).send(score.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

async function addMediumHighScorer(req, res, next) {
  const { playerName, finishTime } = req.body;
  try {
    await query.addMediumHighScorer(playerName, finishTime);
    res.status(200).send("Success");
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

module.exports = {
  getAllMediumScores,
  getMediumScoreById,
  addMediumHighScorer,
};
