const pool = require("./pool");

async function getAllHardScores() {
  return await pool.query("SELECT * FROM nine_card_leader_board;");
}

async function getHardScoreById(id) {
  return await pool.query(
    `SELECT * FROM nine_card_leader_board WHERE id = ${id};`,
  );
}

async function addHardHighScorer(id, name, time, score) {
  await pool.query(
    "INSERT INTO nine_card_leader_board (id, name, time, score) VALUES ($1, $2, $3, $4)",
    [id, name, time, score],
  );
}

module.exports = {
  getAllHardScores,
  getHardScoreById,
  addHardHighScorer,
};
