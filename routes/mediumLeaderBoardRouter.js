const express = require("express");
const router = express.Router();
const mediumLeaderBoardRouter = router;
const mediumLeaderBoardController = require("../controllers/mediumLeaderBoardController");

mediumLeaderBoardRouter.get(
  "/all-medium-scores",
  mediumLeaderBoardController.getAllMediumScores,
);
mediumLeaderBoardRouter.get(
  "/medium-score-by-id",
  mediumLeaderBoardController.getMediumScoreById,
);

mediumLeaderBoardRouter.post(
  "/add-medium-top-scorer",
  mediumLeaderBoardController.addMediumHighScorer,
);

module.exports = mediumLeaderBoardRouter;
