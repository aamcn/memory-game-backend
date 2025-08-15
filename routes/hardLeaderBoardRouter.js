const express = require("express");
const router = express.Router();
const hardLeaderBoardRouter = router;
const hardLeaderBoardController = require("../controllers/hardLeaderBoardController");
const {
  addHighScorerValidation,
  getScoreByIdValidation,
  handleValidationErrors,
} = require("../validation/validationRules");

//GET routes

hardLeaderBoardRouter.get(
  "/all-hard-scores",
  hardLeaderBoardController.getAllHardScores,
);
hardLeaderBoardRouter.get(
  "/hard-score-by-id",
  getScoreByIdValidation,
  handleValidationErrors,
  hardLeaderBoardController.getHardScoreById,
);

// POST routes

hardLeaderBoardRouter.post(
  "/add-hard-top-scorer",
  addHighScorerValidation,
  handleValidationErrors,
  hardLeaderBoardController.addHardHighScorer,
);

module.exports = hardLeaderBoardRouter;
