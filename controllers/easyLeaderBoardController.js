const query = require("../db/easyLeaderBoardQueries");

async function getEasyTest(req, res) {
  res.status(200).send({ message: "Success" });
}

// Call the getAllEasyScores function and return results if successful
// If successful, return the entries; otherwise, forward the error.
async function getAllEasyScores(req, res, next) {
  try {
    const allScores = await query.getAllEasyScores();
    res.status(200).send(allScores.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

// Extract id from request query parameters and pass to getEasyScoreById.
// If successful, return the entry; otherwise, forward the error.
async function getEasyScoreById(req, res, next) {
  try {
    const id = req.query.id;
    const score = await query.getEasyScoreById(id);
    res.status(200).send(score.rows);
  } catch (error) {
    next(error);
  }
}

// Extract new high score details from the request body and pass to addEasyHighScorer.
// If successful, return a success message; otherwise, forward the error.
async function addEasyHighScorer(req, res, next) {
  try {
    const { playerName, finishTime } = req.body;
    console.log(playerName, finishTime);
    await query.addEasyHighScorer(playerName, finishTime);
    res.status(200).send("Success");
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
