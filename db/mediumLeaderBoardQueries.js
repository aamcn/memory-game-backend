const pool = require("./pool");

async function getAllMediumScores() {
  return await pool.query("SELECT * FROM medium_leaderboard;");
}

async function getMediumScoreById(id) {
  return await pool.query(
    `SELECT * FROM medium_leaderboard WHERE id = ${id};`,
  );
}

async function addMediumHighScorer(playerName, finishTime) {
  await pool.query(
    "INSERT INTO medium_leaderboard (player_name, finish_time) VALUES ($1, $2)",
    [playerName, finishTime],
  ); 
}

module.exports = {
  getAllMediumScores,
  getMediumScoreById,
  addMediumHighScorer,
};
 