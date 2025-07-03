const pool = require("./pool");

async function getAllEasyScores() {
  return await pool.query("SELECT * FROM four_card_leader_board;");
}

async function getEasyScoreById(id) {
  return await pool.query(
    `SELECT * FROM four_card_leader_board WHERE id = ${id};`,
  );
}

async function addEasyHighScorer(id, name, time, score) {
  await pool.query(
    "INSERT INTO four_card_leader_board (id, name, time, score) VALUES ($1, $2, $3, $4)",
    [id, name, time, score],
  );
}

module.exports = {
  getAllEasyScores,
  getEasyScoreById,
  addEasyHighScorer,
};
