const express = require("express");
const router = express.Router();
const mediumLeaderBoardRouter = router;
const mediumLeaderBoardController = require("../controllers/mediumLeaderBoardController");

const {
  addHighScorerValidation,
  getScoreByIdValidation,
  handleValidationErrors,
} = require("../validation/validationRules");

//GET routes

mediumLeaderBoardRouter.get(
  "/all-medium-scores",
  mediumLeaderBoardController.getAllMediumScores,
);
mediumLeaderBoardRouter.get(
  "/medium-score-by-id",
  getScoreByIdValidation,
  handleValidationErrors,
  mediumLeaderBoardController.getMediumScoreById,
);

// POST routes

mediumLeaderBoardRouter.post(
  "/add-medium-top-scorer",
  addHighScorerValidation,
  handleValidationErrors,
  mediumLeaderBoardController.addMediumHighScorer,
);

module.exports = mediumLeaderBoardRouter;
