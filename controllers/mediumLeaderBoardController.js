const query = require("../db/mediumLeaderBoardQueries");

// Call the getAllMediumScores function and return results if successful
// If successful, return the entries; otherwise, forward the error.
async function getAllMediumScores(req, res, next) {
  try {
    const allScores = await query.getAllMediumScores();
    res.status(200).send(allScores.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

// Extract id from request query parameters and pass to getMediumScoreById.
// If successful, return the entry; otherwise, forward the error.
async function getMediumScoreById(req, res, next) {
  try {
    const id = req.query.id;
    const score = await query.getMediumScoreById(id);
    res.status(200).send(score.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

// Extract new high score details from the request body and pass to addMediumHighScorer.
// If successful, return a success message; otherwise, forward the error.
async function addMediumHighScorer(req, res, next) {
  try {
    const { playerName, finishTime } = req.body;
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
