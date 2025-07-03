const express = require("express");
const router = express.Router();
const mediumLeaderBoardRouter = router;
const mediumLeaderBoardController = require("../controllers/hardLeaderBoardController");

mediumLeaderBoardRouter.get(
  "/all-medium-scores",
  mediumLeaderBoardController.getAllHardScores,
);
mediumLeaderBoardRouter.get(
  "/medium-score-by-id",
  mediumLeaderBoardController.getHardScoreById,
);

mediumLeaderBoardRouter.post(
  "/add-medium-top-scorer",
  mediumLeaderBoardController.addHardHighScorer,
);

module.exports = mediumLeaderBoardRouter;
