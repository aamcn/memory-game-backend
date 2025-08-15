const query = require("../db/hardLeaderBoardQueries");



// Call the getAllHardScores function and return results if successful
// If successful, return the entries; otherwise, forward the error.
async function getAllHardScores(req, res, next) {
  try {
    const allScores = await query.getAllHardScores();
    res.status(200).send(allScores.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

// Extract id from request parameters and pass to getHardScoreById.
// If successful, return the entry; otherwise, forward the error.
async function getHardScoreById(req, res, next) {
  const id = req.body.id;
  try {
    const score = await query.getHardScoreById(id);
    res.status(200).send(score.rows);
  } catch (error) {
    next(error); // Forward error to global handler
  }
}

// Extract new high score details from the request body and pass to addHardHighScorer.
// If successful, return a success message; otherwise, forward the error.
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
