const express = require("express");
const router = express.Router();
const hardLeaderBoardRouter = router;
const hardLeaderBoardController = require("../controllers/hardLeaderBoardController");

hardLeaderBoardRouter.get(
  "/all-hard-scores",
  hardLeaderBoardController.getAllHardScores,
);
hardLeaderBoardRouter.get(
  "/hard-score-by-id",
  hardLeaderBoardController.getHardScoreById,
);

hardLeaderBoardRouter.post(
  "/add-hard-top-scorer",
  hardLeaderBoardController.addHardHighScorer,
);

module.exports = hardLeaderBoardRouter;
