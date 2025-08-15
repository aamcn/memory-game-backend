const query = require("../db/easyLeaderBoardQueries");
async function getEasyTest(req, res) {
  res.status(200).send('Success');
}

async function getAllEasyScores(req, res, next) {
  const allScores = await query.getAllEasyScores();
  try {
  res.status(200).send(allScores.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

async function getEasyScoreById(req, res, next) {
    try {
      const id = req.body.id;
      const score = await query.getEasyScoreById(id);
      res.status(200).send(score.rows);
    } catch (error) {
      next(error);
  }
}

async function addEasyHighScorer(req, res, next) {
  try {
    const { playerName, finishTime } = req.body;
    await query.addEasyHighScorer(playerName, finishTime);
    res.status(200).send('Success');
  } catch (error) {
    next(error);
  }
}



module.exports = {
  getEasyTest,
  getAllEasyScores,
  getEasyScoreById,
  addEasyHighScorer,
};
