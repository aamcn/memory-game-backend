const pool = require("./pool");

// Get all entries from the hard leaderboard table
async function getAllHardScores() {
  return await pool.query("SELECT * FROM hard_leaderboard;");
}

// Get a specific entry from the hard leaderboard table by id.
async function getHardScoreById(id) {
  return await pool.query("SELECT * FROM hard_leaderboard WHERE id = $1;", [
    id,
  ]);
}

// Add a new high scorer to the hard leaderboard table.
async function addHardHighScorer(playerName, finishTime) {
  await pool.query(
    "INSERT INTO hard_leaderboard (player_name, finish_time) VALUES ($1, $2)",
    [playerName, finishTime],
  );
}

module.exports = {
  getAllHardScores,
  getHardScoreById,
  addHardHighScorer,
};
